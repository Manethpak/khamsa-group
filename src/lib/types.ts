/**
 * Static type definitions for Khamsa Group website
 * These types define the structure of data in /src/data/*.json files
 * Includes optional Directus metadata fields for backwards compatibility
 */

export interface Blog {
  id: string | number
  title: string
  slug: string
  topic?: string
  image?: string
  date: string
  description?: string
  content?: string
  sort?: number
  [key: string]: any
}

export interface Project {
  id: string | number
  title: string
  slug: string
  image?: string
  date: string
  description?: string
  content?: string
  topic?: string
  [key: string]: any
}

export interface Category {
  id: string | number
  title: string
  slug: string
  description?: string
  image?: string
  [key: string]: any
}

export interface Company {
  id: string | number
  name: string
  slug: string
  logo?: string
  founded?: number
  active?: boolean
  company_description?: string
  phone?: string
  website?: string
  category?: any
  more_image?: any[]
  [key: string]: any
}

export interface Hero {
  id?: string | number
  title?: string
  subtitle?: string
  description?: string
  image?: string
  video?: string
  company?: any[]
  [key: string]: any
}

export interface Contact {
  id?: string | number
  user_created?: string
  date_created?: string
  user_updated?: string
  date_updated?: string
  address?: any[]
  link?: any[]
  social_link?: any[]
  iframe?: string
  [key: string]: any // Allow additional Directus metadata fields
}

export interface FAQ {
  id: string | number
  question: string
  answer: string
  [key: string]: any
}

export interface Team {
  id: string | number
  name: string
  position?: string
  image?: string
  bio?: string
  [key: string]: any
}

export interface Office {
  id: string | number
  name: string
  address?: string
  phone?: string
  image?: string
  [key: string]: any
}

export interface Success {
  id: string | number
  title: string
  value?: string
  description?: string
  icon?: string
  [key: string]: any
}

export interface Journey {
  id: string | number
  year?: string
  title: string
  description?: string
  image?: string
  [key: string]: any
}

export interface Item {
  id: string | number
  title?: string
  description?: string
  [key: string]: any
}

export interface Investment {
  id?: string | number
  title?: string
  subtitle?: string
  description?: string
  items?: any[]
  category?: any[]
  project?: any[]
  [key: string]: any
}

export interface About {
  id?: string | number
  title?: string
  description?: string
  mission?: string
  vision?: string
  values?: any[]
  [key: string]: any
}

/**
 * Main Schema interface matching the Directus structure
 * This maintains backwards compatibility with existing code
 */
export interface Schema {
  Blogs: Blog[]
  Project: Project[]
  Category: Category[]
  Company: Company[]
  Hero: Hero
  Contact: Contact
  FAQ: FAQ[]
  Team: Team[]
  Office: Office[]
  Success: Success[]
  Journey: Journey[]
  Item: Item[]
  Investment: Investment
  About: About
}
