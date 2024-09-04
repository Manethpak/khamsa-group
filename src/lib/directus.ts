import { createDirectus, rest } from '@directus/sdk'
import { Schema } from './schema'

const directus = createDirectus<Schema>(
  'https://khamsa.panel.dreamslab.dev'
).with(
  rest({
    onRequest: (options) => ({ ...options, cache: 'no-store' }),
  })
)

export function getImageUrl(id: string) {
  return 'https://khamsa.panel.dreamslab.dev/assets/' + id
}

export default directus
