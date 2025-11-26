import fs from 'fs'
import path from 'path'
import https from 'https'

const DATA_DIR = path.join(process.cwd(), 'src/data')
const PUBLIC_DIR = path.join(process.cwd(), 'public/assets')
const BASE_URL = 'https://admin.khamsagroup.com'

// Create assets directory if it doesn't exist
if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true })
}

function downloadImage(url: string, filepath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath)
    https
      .get(url, (response) => {
        if (response.statusCode !== 200) {
          reject(new Error(`Failed to download: ${response.statusCode}`))
          return
        }
        response.pipe(file)
        file.on('finish', () => {
          file.close()
          resolve()
        })
      })
      .on('error', (err) => {
        fs.unlink(filepath, () => {}) // Delete the file on error
        reject(err)
      })
  })
}

function extractImageIds(obj: any, ids: Set<string>) {
  if (typeof obj === 'string') {
    // Check if it looks like a UUID (Directus asset ID)
    if (
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
        obj
      )
    ) {
      ids.add(obj)
    }
  } else if (Array.isArray(obj)) {
    obj.forEach((item) => extractImageIds(item, ids))
  } else if (obj && typeof obj === 'object') {
    Object.values(obj).forEach((value) => extractImageIds(value, ids))
  }
}

async function downloadAllImages() {
  console.log('Scanning data files for image references...')

  const imageIds = new Set<string>()

  // Read all JSON files in data directory
  const files = fs.readdirSync(DATA_DIR).filter((f) => f.endsWith('.json'))

  for (const file of files) {
    const content = fs.readFileSync(path.join(DATA_DIR, file), 'utf-8')
    try {
      const data = JSON.parse(content)
      extractImageIds(data, imageIds)
    } catch (err) {
      console.error(`Error parsing ${file}:`, err)
    }
  }

  console.log(`Found ${imageIds.size} unique image references`)

  let downloaded = 0
  let skipped = 0
  let failed = 0

  for (const id of imageIds) {
    const filepath = path.join(PUBLIC_DIR, id)

    // Skip if already exists
    if (fs.existsSync(filepath)) {
      skipped++
      continue
    }

    const url = `${BASE_URL}/assets/${id}`

    try {
      console.log(`Downloading: ${id}`)
      await downloadImage(url, filepath)
      downloaded++
    } catch (err) {
      console.error(`Failed to download ${id}:`, err)
      failed++
    }
  }

  console.log('\n--- Download Summary ---')
  console.log(`Downloaded: ${downloaded}`)
  console.log(`Skipped (already exists): ${skipped}`)
  console.log(`Failed: ${failed}`)
  console.log(`Total: ${imageIds.size}`)
  console.log(`Images saved to: ${PUBLIC_DIR}`)
}

downloadAllImages().catch(console.error)
