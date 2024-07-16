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
            BUILDING FACTORY #3, RD. 39D, ST. 50M,<br></br> ANLUNGKONG VILLAGE,
            DANGKOR COMMUNE, PREYSAR DISTRICT,<br></br> PHNOM PENH ROYAL
            CAPITAL, KINGDOM OF CAMBODIA
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
    <footer className=" flex w-full flex-col items-center bg-black text-white shadow-md">
      <div className="w-full max-w-screen-2xl">
        <div className="mx-6 mt-16 flex flex-wrap justify-center gap-8 md:mx-4 lg:gap-28">
          {footerLinks.map((item) => (
            <div
              key={item.title}
              className="mt-3 flex flex-col items-center gap-6 text-center lg:mr-[150px] lg:items-start lg:text-left"
            >
              <h1 className="text-2xl font-medium uppercase">{item.title}</h1>
              <div className="flex flex-col gap-5">
                {item.links.map((link) =>
                  link.description ? (
                    <div
                      key={link.title}
                      className="text-base font-normal text-[#BCBCBC]"
                    >
                      {link.description}
                    </div>
                  ) : (
                    <Link
                      key={link.title}
                      href={link.url}
                      className="text-base font-normal text-[#BCBCBC] hover:text-[#3B82F6]"
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
        <span className="text-base font-normal">© KhamsaGroup 2023.</span>
      </div>
    </footer>
  )
}

export default FooterContent
