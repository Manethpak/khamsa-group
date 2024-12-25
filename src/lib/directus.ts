import { createDirectus, rest } from '@directus/sdk'
import { Schema } from './schema'

const BASE_URL = 'https://directus.khamsagroup.com'

const directus = createDirectus<Schema>(BASE_URL).with(
  rest({
    onRequest: (options) => ({ ...options, cache: 'no-store' }),
  })
)

type Preset = {
  key?: string
  width?: number
  height?: number
  quality?: number
}

export function getImageUrl(id: string, preset?: Preset) {
  const url = new URL('/assets/' + id, BASE_URL)

  for (const [key, value] of Object.entries(preset || {})) {
    url.searchParams.set(key, value.toString())
  }

  return url.href
}

export default directus
