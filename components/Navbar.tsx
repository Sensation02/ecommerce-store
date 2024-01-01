import React from 'react'
import Container from '@/components/ui/container'
import MainNav from '@/components/MainNav'
import Link from 'next/link'
import getCategories from '@/actions/getCategories'
import NavBarActions from './NavBarActions'

export const revalidate = 0 // so that the data is always fresh

const Navbar = async () => {
  const categories = await getCategories()
  return (
    <header className='border-b'>
      <Container>
        <div className='relative px-4 sm:px-6 lg:px-8 flex h-16 items-center'>
          <Link href='/' className='ml-4 flex lg:ml-0 gap-x-2'>
            <p className='font-bold text-xl'>Store</p>
          </Link>
          <MainNav data={categories} />
          <NavBarActions />
        </div>
      </Container>
    </header>
  )
}

export default Navbar
