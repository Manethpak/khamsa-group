import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format date to string
 * @param date string (2023-03-19T00:00:00.000Z)
 * @returns string (Mar 19, 2023)
 */
export function formatDate(date: string): string {
  const obj = new Date(date)

  // create this format,
  const month = obj.toLocaleString('default', { month: 'long' })
  const day = obj.getDate()
  const year = obj.getFullYear()

  return `${month} ${day}, ${year}`
}
