import Link from 'next/link'

const footerLinks = [
  {
    title: 'Resources',
    links: [
      { title: 'Overview', url: 'https://example.com/blog' },
      { title: 'Our Journey', url: 'https://example.com/our-journey' },
      { title: 'About Us', url: 'https://example.com/about' },
      { title: 'Blogs', url: 'https://example.com/blogs' },
      { title: 'Contact Us', url: 'https://example.com/contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      {
        title: 'info@khamsagroup.com',
        url: 'mailto:info@khamsagroup.com',
      },
      {
        title: 'Linktr.ee/KhamsaGroup',
        url: 'https://linktr.ee/KhamsaGroup',
      },
      { title: 'Careers', url: 'https://example.com/careers' },
      {
        title: 'Building Location',
        description: (
          <p>
            BUILDING FACTORY #3, RD. 39D, ST. 50M,
            <br /> ANLUNGKONG VILLAGE, DANGKOR COMMUNE, PREYSAR DISTRICT,
            <br /> PHNOM PENH ROYAL CAPITAL, KINGDOM OF CAMBODIA
          </p>
        ),
        url: 'https://example.com/location',
      },
      {
        title: 'Terms and Conditions',
        url: 'https://linktr.ee/KhamsaGroup',
      },
    ],
  },
]

const FooterContent = () => {
  return (
    <footer className="flex w-full flex-col items-center bg-black text-white shadow-md">
      <div className="w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="mb-8 mt-5 flex justify-center  px-4 text-white">
          <h1 className="text-2xl font-bold uppercase">KhamsaGroup</h1>
        </div>
        {/* Footer Links Sections */}
        <div className="flex flex-wrap justify-start gap-8 lg:justify-center lg:gap-28">
          {footerLinks.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-start gap-6 text-left lg:items-center lg:text-center"
            >
              <h2 className="text-xl font-medium uppercase md:text-2xl">
                {item.title}
              </h2>
              <div
                className={`flex flex-col gap-5 ${item.title === 'Resources' || item.title === 'Company' ? 'text-justify' : ''}`}
              >
                {item.links.map((link) =>
                  link.description ? (
                    <div
                      key={link.title}
                      className="text-sm font-normal text-[#BCBCBC] md:text-base"
                    >
                      {link.description}
                    </div>
                  ) : (
                    <Link
                      key={link.title}
                      href={link.url}
                      className="text-sm font-normal text-[#BCBCBC] hover:text-[#3B82F6] md:text-base"
                      target="_blank"
                    >
                      {link.title}
                    </Link>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16 w-full border-t border-[#C1C1C180]"></div>
      <div className="mt-6 flex justify-center pb-6">
        <span className="text-sm font-normal md:text-base">
          © KhamsaGroup 2023.
        </span>
      </div>
    </footer>
  )
}

export default FooterContent
