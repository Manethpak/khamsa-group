import {
  createDirectus,
  rest,
  readItem,
  readItems,
  readSingleton,
} from '@directus/sdk'
import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

const DATA_DIR = path.join(process.cwd(), 'src/data')
const BASE_URL = process.env.NEXT_PUBLIC_API_URL

async function exportData() {
  console.log('Starting Directus data export...')

  if (!BASE_URL) {
    console.error('❌ NEXT_PUBLIC_API_URL is not set in .env file')
    process.exit(1)
  }

  console.log(`Using Directus URL: ${BASE_URL}`)

  const directus = createDirectus(BASE_URL).with(
    rest({
      onRequest: (options) => ({ ...options, cache: 'no-store' }),
    })
  )

  try {
    // Create data directory if it doesn't exist
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true })
    }

    // Export Blogs
    console.log('Exporting Blogs...')
    const blogs = await directus.request(
      readItems('Blogs', {
        fields: ['*'],
        limit: -1,
        sort: ['sort', '-date'],
      })
    )
    fs.writeFileSync(
      path.join(DATA_DIR, 'blogs.json'),
      JSON.stringify(blogs, null, 2)
    )

    // Export Projects
    console.log('Exporting Projects...')
    const projects = await directus.request(
      readItems('Project', {
        fields: ['*'],
        limit: -1,
        sort: ['-date'],
      })
    )
    fs.writeFileSync(
      path.join(DATA_DIR, 'projects.json'),
      JSON.stringify(projects, null, 2)
    )

    // Export Companies
    console.log('Exporting Companies...')
    const companies = await directus.request(
      readItems('Company', {
        fields: ['*', 'category.*', 'more_image.*'],
        limit: -1,
        sort: ['founded'],
        filter: { active: { _eq: true } },
      })
    )
    fs.writeFileSync(
      path.join(DATA_DIR, 'companies.json'),
      JSON.stringify(companies, null, 2)
    )

    // Export Categories
    console.log('Exporting Categories...')
    const categories = await directus.request(
      readItems('Category', {
        fields: ['*'],
        limit: -1,
      })
    )
    fs.writeFileSync(
      path.join(DATA_DIR, 'categories.json'),
      JSON.stringify(categories, null, 2)
    )

    // Export Hero (singleton)
    console.log('Exporting Hero...')
    const hero = await directus.request(readSingleton('Hero'))
    fs.writeFileSync(
      path.join(DATA_DIR, 'hero.json'),
      JSON.stringify(hero, null, 2)
    )

    // Export Contact (singleton)
    console.log('Exporting Contact...')
    const contact = await directus.request(readSingleton('Contact'))
    fs.writeFileSync(
      path.join(DATA_DIR, 'contact.json'),
      JSON.stringify(contact, null, 2)
    )

    // Export FAQs
    console.log('Exporting FAQs...')
    const faqs = await directus.request(
      readItems('FAQ', {
        fields: ['*'],
        limit: -1,
      })
    )
    fs.writeFileSync(
      path.join(DATA_DIR, 'faqs.json'),
      JSON.stringify(faqs, null, 2)
    )

    // Export Teams
    console.log('Exporting Teams...')
    const teams = await directus.request(
      readItems('Teams', {
        fields: ['*'],
        limit: -1,
      })
    )
    fs.writeFileSync(
      path.join(DATA_DIR, 'teams.json'),
      JSON.stringify(teams, null, 2)
    )

    // Export Office
    console.log('Exporting Office...')
    const office = await directus.request(
      readItems('Office', {
        fields: ['*'],
        limit: -1,
      })
    )
    fs.writeFileSync(
      path.join(DATA_DIR, 'office.json'),
      JSON.stringify(office, null, 2)
    )

    // Export Success
    console.log('Exporting Success...')
    const success = await directus.request(
      readItems('Success', {
        fields: ['*'],
        limit: -1,
      })
    )
    fs.writeFileSync(
      path.join(DATA_DIR, 'success.json'),
      JSON.stringify(success, null, 2)
    )

    // Export Our Journey
    console.log('Exporting Our Journey...')
    const journey = await directus.request(
      readItems('Our_Journey', {
        fields: ['*'],
        limit: -1,
      })
    )
    fs.writeFileSync(
      path.join(DATA_DIR, 'our-journey.json'),
      JSON.stringify(journey, null, 2)
    )

    // Export Items
    console.log('Exporting Items...')
    const items = await directus.request(
      readItems('Item', {
        fields: ['*'],
        limit: -1,
      })
    )
    fs.writeFileSync(
      path.join(DATA_DIR, 'items.json'),
      JSON.stringify(items, null, 2)
    )

    // Export About section
    console.log('Exporting About...')
    const about = await directus.request(readSingleton('About'))
    fs.writeFileSync(
      path.join(DATA_DIR, 'about.json'),
      JSON.stringify(about, null, 2)
    )

    console.log('✅ Data export completed successfully!')
    console.log(`Data saved to: ${DATA_DIR}`)
  } catch (error) {
    console.error('❌ Error exporting data:', error)
    process.exit(1)
  }
}

exportData()
