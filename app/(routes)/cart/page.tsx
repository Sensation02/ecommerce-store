'use client'
import Container from '@/components/ui/container'
import useCart from '@/hooks/useCart'
import { useIsMounted } from '@/hooks/useIsMounted'
import React from 'react'
import CartItem from './components/CartItem'
import Summary from './components/Summary'

const CartPage = () => {
  // const isMounted = useIsMounted()
  // if (!isMounted) return null

  const cart = useCart()

  return (
    <div className='bg-white '>
      <Container>
        <div className='px-4 py-16 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-3xl'>
            Shopping Cart
          </h1>

          <div className='mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12'>
            <div className='lg:col-span-7'>
              {cart.items.length === 0 && (
                <p className='text-neutral-500'>Cart is empty</p>
              )}
              <ul>
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CartPage
