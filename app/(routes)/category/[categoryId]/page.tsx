import getCategory from '@/actions/getCategory'
import getColors from '@/actions/getColors'
import getProducts from '@/actions/getProducts'
import getSizes from '@/actions/getSizes.'
import Billboard from '@/components/Billboard'
import Container from '@/components/ui/container'
import React from 'react'
import Filter from './components/Filter'
import NoResults from '@/components/ui/noResults'
import ProductCard from '@/components/ui/productCard'
import MobileFilter from './components/MobileFilter'

interface Props {
  params: {
    categoryId: string
  }
  searchParams: {
    colorId: string
    sizeId: string
  }
}

export const revalidate = 0

const CategoryPage: React.FC<Props> = async ({ params, searchParams }) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  })
  const sizes = await getSizes()
  const colors = await getColors()
  const category = await getCategory(params.categoryId)

  return (
    <div className='bg-white'>
      <Container>
        <Billboard data={category.billboard} />
        <div className='px-4 sm:px-6 lg:px-8 pb-24'>
          <div className='lg:grid lg:grid-cols-5 lg:gap-x-8'>
            <MobileFilter sizes={sizes} colors={colors} />
            <div className='hidden lg:block'>
              <Filter valueKey='sizeId' name='Sizes' data={sizes} />
              <Filter valueKey='colorId' name='Colors' data={colors} />M
            </div>
            <div className='mt-6 lg:col-span-4 lg:mt-0'>
              {products.length === 0 && <NoResults />}
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {products.map((product) => (
                  <ProductCard key={product.id} data={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CategoryPage
