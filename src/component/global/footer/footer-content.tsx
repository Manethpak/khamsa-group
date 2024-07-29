import Link from 'next/link'
import { title } from 'process'

const footerLinks = [
  {
    title: 'Overview',
    links: [
      { title: 'Our Journey', url: '/journey' },
      { title: 'About Us', url: '/about-us' },
      { title: 'Blogs', url: '/blog' },
      { title: 'Contact Us', url: '/contact' },
    ],
  },
  {
    title: 'More Informations',
    links: [
      {
        title: 'info@khamsagroup.com',
        url: '/about-us',
      },
      {
        title: 'Linktr.ee/KhamsaGroup',
        url: 'https://linktr.ee/KhamsaGroup',
      },
      { title: '+855(0)15686933', url: '/contact' },
      {
        title: 'Building Location',
        location: [
          {
            title: 'AI FARM Robotics Factory, Ring Road 2, Cambodia',
            url: 'https://maps.app.goo.gl/ENUtZ4TccU9Vt46j6'
          },
        ],
      },
      {
        title: 'Terms and Conditions',
        url: '/terms-and-conditions',
      },
    ],
  },
]

const FooterContent = () => {
  return (
    <footer className="flex w-full flex-col items-center bg-black p-10 text-white shadow-md">
      <div className="flex w-full max-w-7xl flex-col gap-10">
        {/* Title Section */}
        <h1 className="text-2xl font-bold">KhamsaGroup</h1>
        {/* Footer Links Sections */}
        <div className="flex w-full flex-col gap-10 sm:flex-row">
          {footerLinks.map((item) => (
            <div
              key={item.title}
              className="flex w-full max-w-lg flex-col gap-3"
            >
              {item.title}

              {item.links.map((link) => (
                <div
                  key={link.title}
                  className="text-sm font-normal text-white/70"
                >
                  <Link href={`${link.url}`}>{link.title}</Link>
                  {link.location?.map((data) => (
                    <div key={data.title} className="p-1">
                      <Link href={`${data.url}`} target="_blank">{data.title}</Link>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
        <span className="text-xs font-normal text-white/70">
          © KhamsaGroup 2023.
        </span>
      </div>
    </footer>
  )
}

export default FooterContent
