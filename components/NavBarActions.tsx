'use client'

import { ShoppingBag } from 'lucide-react'
import Button from './ui/button'
import { useIsMounted } from '@/hooks/useIsMounted'
import useCart from '@/hooks/useCart'
import { useRouter } from 'next/navigation'

const NavBarActions = () => {
  // localStorage is used to store the cart items
  const cart = useCart()
  const router = useRouter()

  // regular hydration
  const isMounted = useIsMounted()
  if (!isMounted) return null

  return (
    <div className='ml-auto flex items-center gap-x-4'>
      <Button
        onClick={() => router.push('/cart')}
        className='flex items-center rounded-full bg-black px-4 py-2 text-white'
      >
        <ShoppingBag size={20} />
        <span className='ml-2 text-sm font-medium text-white'>
          {cart.items.length}
        </span>
      </Button>
    </div>
  )
}

export default NavBarActions
