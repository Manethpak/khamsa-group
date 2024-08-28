import Image from 'next/image'

const categories = [
  {
    imageUrl: '/path/to/image1.jpg',
    title: 'Category Title 1',
    subtitle: 'Subtitle 1',
    date: 'August 28, 2024',
  },
  {
    imageUrl: '/path/to/image2.jpg',
    title: 'Category Title 2',
    subtitle: 'Subtitle 2',
    date: 'August 28, 2024',
  },
  {
    imageUrl: '/path/to/image3.jpg',
    title: 'Category Title 3',
    subtitle: 'Subtitle 3',
    date: 'August 28, 2024',
  },
  {
    imageUrl: '/path/to/image4.jpg',
    title: 'Category Title 4',
    subtitle: 'Subtitle 4',
    date: 'August 28, 2024',
  },
  // Add more categories as needed
]

export default function Category() {
  return (
    <div className="p-5">
      {/* Category Grid */}
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-start rounded-[10px_0px_0px_0px] bg-white p-3 shadow-md transition-shadow duration-300 hover:shadow-lg"
            style={{
              width: '423px',
              height: '590px',
              borderRadius: '10px 10px 0px 0px',
              opacity: '1',
            }}
          >
            {/* Image */}
            <div
              className="relative mb-3 w-full"
              style={{
                width: '423px',
                height: '400px',
                borderRadius: '10px 0px 0px 0px',
                opacity: '1',
              }}
            >
              <Image
                src={category.imageUrl}
                alt={category.title}
                layout="fill"
                objectFit="cover"
                className="rounded-[10px_0px_0px_0px]"
              />
            </div>
            {/* Content */}
            <div className="flex flex-col items-start p-3 text-left">
              <h2 className="text-xl font-semibold text-secondary">
                {category.title}
              </h2>
              <p className="text-gray-600 text-base">{category.subtitle}</p>
              <div className="text-gray-500 mt-2 text-sm">
                <span>{category.date}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
