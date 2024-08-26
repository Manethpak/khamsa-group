import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string) {
  const obj = new Date(date)

  // create this format, Mar 19, 2023
  const month = obj.toLocaleString('default', { month: 'long' })
  const day = obj.getDate()
  const year = obj.getFullYear()

  return `${month} ${day}, ${year}`
}
