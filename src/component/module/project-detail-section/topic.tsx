import React from 'react'

const newsItems = [
  {
    title: 'News Title 1',
    summary:
      'Pirate ipsum arrgh bounty warp jack. Coast davy spanish crack bounty gunwalls avast. Crimp.',
  },
  {
    title: 'News Title 2',
    summary:
      'Pirate ipsum arrgh bounty warp jack. Coast davy spanish crack bounty gunwalls avast. Crimp.',
  },
  {
    title: 'News Title 3',
    summary:
      'Pirate ipsum arrgh bounty warp jack. Coast davy spanish crack bounty gunwalls avast. Crimp.',
  },
  {
    title: 'News Title 4',
    summary:
      'Pirate ipsum arrgh bounty warp jack. Coast davy spanish crack bounty gunwalls avast. Crimp.',
  },
]

const Topic = () => {
  return (
    <div
      className="container mx-auto mb-4 mt-16 w-full bg-secondPrimary p-4"
      style={{ height: '616px' }}
    >
      {/* Flex container for the heading and See All button */}
      <div className="mb-8 mt-8 flex items-center justify-between">
        <h2 className="font-secondprimary text-3xl capitalize">More Topic</h2>
        <button className="rounded border border-primary bg-transparent px-4 py-1 text-primary hover:bg-primary hover:text-white">
          See All
        </button>
      </div>

      <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {newsItems.map((item, index) => (
          <div key={index}>
            {/* Image box */}
            <div
              className="bg-white shadow-md"
              style={{
                width: '283.15px',
                height: '258px',
                opacity: 1,
              }}
            >
              <div className="bg-gray-300 h-full w-full rounded-lg" />
            </div>

            {/* Title and description outside the box */}
            <div className="mt-2">
              <h3 className="mb-1 text-lg font-semibold">{item.title}</h3>
              <p
                className="text-gray-600 text-sm"
                style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {item.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Topic
