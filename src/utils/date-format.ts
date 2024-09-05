export function dateYearFormat(dateString: string) {
  const date = new Date(dateString)

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    return ''
  }

  const year = date.getFullYear()
  const month = date.toLocaleString('default', { month: 'long' })

  return `${month}, ${year}`
}
