import { createDirectus, rest } from '@directus/sdk'
import { Schema } from './schema'

const directus = createDirectus<Schema>(
  'https://khamsa.panel.dreamslab.dev'
).with(rest())

export default directus
