'use client'

import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { toast } from 'react-hot-toast'
import Button from '@/components/ui/button'
import Currency from '@/components/ui/currency'
import useCart from '@/hooks/useCart'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/checkout`

const Summary = () => {
  const searchParams = useSearchParams()
  const items = useCart((state) => state.items)
  const removeAll = useCart((state) => state.removeAll)

  const total = items.reduce((acc, item) => {
    return acc + +item.price
  }, 0)

  const onCheckout = async () => {
    try {
      const res = await axios.post('URL', {
        produceIds: items.map((item) => item.id),
      })
      window.location.href = res.data.url
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (searchParams.get('success')) {
      toast.success('Order placed successfully')
      removeAll()
    }

    if (searchParams.get('canceled')) {
      toast.error('Order canceled')
    }
  }, [searchParams])

  return (
    <div className='mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:mt-0 lg:col-span-5 lg:p'>
      <h2 className='text-lg font-semibold text-black'>Summary</h2>
      <div className=' items-center justify-between border-t border-gray-200 pt-4'>
        <h3 className='text-lg font-semibold text-black'>Total</h3>
        <Currency value={total} />
      </div>
      <Button className='mt-6 w-full' onClick={onCheckout}>
        Place Order
      </Button>
    </div>
  )
}

export default Summary
