/**
 * Image utility for the static Khamsa Group website
 * Previously used for Directus CDN, now serves local assets
 */

type Preset = {
  key?: string
  width?: number
  height?: number
  quality?: number
}

/**
 * Get image URL - now returns local asset paths
 * Images are stored in /public/assets/
 *
 * @param id - Image ID (UUID) or path
 * @param preset - Ignored for static images (use Next.js Image component for optimization)
 */
export function getImageUrl(id: string, preset?: Preset) {
  if (!id) return ''

  // If it's already a path (contains / or .), return as-is
  if (id.includes('/') || id.includes('.')) {
    return id.startsWith('/') ? id : `/${id}`
  }

  // Return path to local asset
  // Note: preset parameters are ignored for static images
  return `/assets/${id}`
}
