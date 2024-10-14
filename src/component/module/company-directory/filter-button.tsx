import { ChevronDown } from 'lucide-react'
import React from 'react'

type FilterButtonProps = {
  title: string
}

const FilterButton = ({ title }: FilterButtonProps) => {
  return (
    <button className="flex items-center gap-3 rounded-full border px-6 py-2">
      {title}
      <ChevronDown />
    </button>
  )
}

export default FilterButton
