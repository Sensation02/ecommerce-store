import Container from '@/components/ui/container'
import React from 'react'
import Billboard from '@/components/Billboard'
import getBillboard from '@/actions/getBillboard'
import getProducts from '@/actions/getProducts'
import ProductList from '@/components/ProductList'

export const revalidate = 0

const HomePage = async () => {
  const billboard = await getBillboard('6634d29c-cb50-495d-9e1b-862c410d70a9')
  // id here is the id of the billboard in the database from the admin panel (billboards)

  const products = await getProducts({
    isFeatured: true,
  })

  return (
    <Container>
      <main className='space-y-10 pb-10'>
        <Billboard data={billboard} />
        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
          <ProductList title='Featured Products' items={products || []} />
        </div>
      </main>
    </Container>
  )
}

export default HomePage
