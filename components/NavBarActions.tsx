'use client'

import { ShoppingBag } from 'lucide-react'
import Button from './ui/button'
import { useIsMounted } from '@/lib/useIsMounted'

const NavBarActions = () => {
  // localStorage is used to store the cart items

  // regular hydration
  const isMounted = useIsMounted()

  if (!isMounted) return null

  return (
    <div className='ml-auto flex items-center gap-x-4'>
      <Button className='flex items-center rounded-full bg-black px-4 py-2 text-white'>
        <ShoppingBag size={20} />
        <span className='ml-2 text-sm font-medium text-white'>0</span>
      </Button>
    </div>
  )
}

export default NavBarActions
