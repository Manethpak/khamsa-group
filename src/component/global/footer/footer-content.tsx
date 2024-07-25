import Link from 'next/link'

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
        url: '/about-us'
      },
      {
        title: 'Linktr.ee/KhamsaGroup',
        url: 'https://linktr.ee/KhamsaGroup',
      },
      { title: '+885(0)15686933', url: '/contact' },
      {
        title: 'Building Location',
        description: (
          <p>
            BUILDING FACTORY #3, RD. 39D, ST. 50M,ANLUNGKONG VILLAGE, DANGKOR COMMUNE, PREYSAR DISTRICT,
            PHNOM PENH ROYAL CAPITAL, KINGDOM OF CAMBODIA
          </p>
        ),
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
        <div className="flex flex-col sm:flex-row gap-10 w-full">
          {footerLinks.map((item) => (
           
              <div
              key={item.title}
                className={`flex flex-col max-w-lg w-full gap-3 ${item.title === 'Resources' || item.title === 'Company' ? '' : ''}`}
              >
                {item.title}
                {item.links.map((link) =>
                  link.description ? (
                    <div
                      key={link.title}
                      className="text-sm font-normal text-[#BCBCBC] "
                    >
                      {link.description}
                    </div>
                  ) : (
                    <Link
                      key={link.title}
                      href={link.url}
                      className="text-sm text-[#BCBCBC] hover:text-[#3B82F6] "
                    >
                      {link.title}
                    </Link>
                  )
                )}
              </div>
    
          ))}
        </div>
        <span className="text-xs font-normal  text-[#BCBCBC]">
          © KhamsaGroup 2023.
        </span>
      </div>
      
    </footer>
  )
}

export default FooterContent
