import Link from 'next/link'
import Image from 'next/image'

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
        title: (
          <p>
            BUILDING FACTORY #3, RD. 39D, ST. 50M,<br></br> ANLUNGKONG VILLAGE,
            DANGKOR COMMUNE, PREYSAR DISTRICT,<br></br> PHNOM PENH ROYAL CAPITAL, KINGDOM
            OF CAMBODIA
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
    <footer className="mt-2 flex w-full  flex-col bg-black text-white shadow-md">
      <div>
        <div className="mx-6 mt-16 flex flex-wrap  justify-center gap-28 md:mx-4">
          {footerLinks.map((item) => (
            <div key={item.title} className="flex flex-col  mt-3 justify-center mr-[150px] gap-6">
              <h1 className="text-2xl font-medium uppercase min-[450px]:text-center lg:text-left">
                {item.title}
              </h1>
              <div className="flex flex-col gap-5  min-[320px]:text-center lg:text-left">
                {item.links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.url}
                    className="text-base font-normal  text-[#BCBCBC] hover:text-[#3B82F6]"
                    target="_blank"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16 border-t border-[#C1C1C180]"></div>
      <div className="mt-6 flex  justify-center pb-6">
        <span className="text-base  font-normal">© KhamsaGroup 2023.</span>
      </div>
    </footer>
  )
}

export default FooterContent
