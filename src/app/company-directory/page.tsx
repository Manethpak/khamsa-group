import CompanyCard from '@/component/module/company-directory/company-card'
import FilterButton from '@/component/module/company-directory/filter-button'

const data = [
  {
    title: 'DreamsLAB',
    description: 'Leading provider of tech solutions.',
    category: 'Technology',
    date: '2024-present',
  },
]

const CompanyDirectoryPage = () => {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex w-full max-w-screen-2xl flex-col gap-10 px-5 py-10 md:px-10 lg:px-24">
        <h1 className="text-2xl font-semibold">Company Directory</h1>
        <div className="flex flex-wrap gap-5">
          <FilterButton title="Industry" />
        </div>
        <div className="flex flex-col gap-5">
          {data.map((project, index) => (
            <CompanyCard
              title={project.title}
              key={index}
              description={project.description}
              category={project.category}
              date={project.date}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CompanyDirectoryPage
