import getProducts from '@/actions/getProducts'
import getProduct from '@/actions/getProduct'
import ProductList from '@/components/ProductList'
import Container from '@/components/ui/container'
import React from 'react'
import Gallery from '@/components/gallery/index'
import NoResults from '@/components/ui/noResults'
import Info from '@/components/gallery/Info'

interface Props {
  params: {
    productId: string
  }
}

const ProductPage: React.FC<Props> = async ({ params }) => {
  const product = await getProduct(params.productId)
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  })

  if (!product) return <NoResults />

  return (
    <div className='bg-white'>
      <Container>
        <div className='px-4 py-10 sm:px-6 lg:px-8'>
          <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
            <Gallery images={product?.images} />
            <div className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>
              <Info data={product} />
            </div>
          </div>
          <hr className='my-10' />
          <ProductList title='Related items' items={suggestedProducts} />
        </div>
      </Container>
    </div>
  )
}

export default ProductPage
