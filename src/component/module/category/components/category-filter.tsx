import React from 'react'

type CategoryFilterProps = {
  onChange: () => void
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ onChange }) => (
  <div className="absolute left-[1587px] top-[152px] h-[40px] w-[288px] px-3 opacity-100">
    <select
      className="border-gray-300 text-gray-700 h-full w-full rounded-lg border bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
      defaultValue=""
      onChange={onChange}
    >
      <option value="" disabled>
        Select Category
      </option>
      {[
        'AgriTech',
        'Real Estate',
        'Bio Tech',
        'AI & Software',
        'Fin Tech',
        'Knowledge',
        'Ed Tech',
        'Clean Tech',
        'Robotics',
      ].map((category) => (
        <option
          key={category.toLowerCase().replace(/ & /g, '').replace(/ /g, '')}
          value={category.toLowerCase().replace(/ & /g, '').replace(/ /g, '')}
        >
          {category}
        </option>
      ))}
    </select>
  </div>
)

export default CategoryFilter
