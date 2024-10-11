import React from 'react'

const newsItems = [
  { title: 'News Title 1', summary: 'Summary of the news item 1...' },
  { title: 'News Title 2', summary: 'Summary of the news item 2...' },
  { title: 'News Title 3', summary: 'Summary of the news item 3...' },
  { title: 'News Title 4', summary: 'Summary of the news item 4...' },
]

const Topic = () => {
  return (
    <div
      className="container mx-auto mt-8 w-full bg-secondPrimary p-4"
      style={{ height: '616px' }}
    >
      <h2 className="font-secondprimary mb-4 text-center text-3xl capitalize">
        Latest News
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {' '}
        {/* Keep it as a grid with one column */}
        {newsItems.map((item, index) => (
          <div
            key={index}
            className="rounded-lg bg-white p-4 shadow-md"
            style={{
              width: '200.15px',
              height: '120px',
              opacity: 1,
            }}
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.summary}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Topic
