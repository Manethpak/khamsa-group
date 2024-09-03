
import CompanyList from '@/component/module/company/company-list'
import { fetchCategory, fetchCompanyByCategorySlug } from '@/fetcher/category/fetch-category'
type Props = {
  params: { slug: string }
} 
const CategoryPage = async ({ params }: Props) => {
  const companies = await fetchCompanyByCategorySlug(params.slug)
  const categoryData = await fetchCategory()    

  return <CompanyList company={companies} category={categoryData} />


}

export default CategoryPage
