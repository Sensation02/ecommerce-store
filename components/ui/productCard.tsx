'use client'

import { Product } from '@/types'
import React, { MouseEventHandler } from 'react'
import Image from 'next/image'
import IconButton from './iconButton'
import { Expand, ShoppingCart } from 'lucide-react'
import Currency from './currency'
import { useRouter } from 'next/navigation'
import usePreviewModel from '@/hooks/usePreviewModel'
import useCart from '@/hooks/useCart'

interface Props {
  data: Product
}

const ProductCard: React.FC<Props> = ({ data }) => {
  const previewModal = usePreviewModel()
  const cart = useCart()
  const router = useRouter()
  const handleClick = () => {
    router.push(`/product/${data?.id}`)
  }

  const onPreview = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation() // Prevents the click event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event. (click event on the card)
    previewModal.onOpen(data)
  }

  const onAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    cart.addItem(data)
  }

  return (
    <div
      className='bg-white group cursor-pointer rounded-xl border p-3 space-y-2'
      onClick={handleClick}
    >
      {/* Images and Action */}
      <div className='aspect-square rounded-xl bg-gray-100 relative'>
        <Image
          src={data?.images?.[0]?.url}
          alt={data?.name}
          fill
          className='aspect-square object-cover rounded-md'
        />
        <div className=' opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5'>
          <div className='flex gap-x-6 justify-center'>
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className='text-gray-600' />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className='text-gray-600' />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <h3 className='font-bold text-lg'>{data?.name}</h3>
        <p className='text-sm text-gray-500'>{data?.category?.name}</p>
      </div>
      <div className='flex justify-between items-center'>
        <Currency value={data?.price} />
      </div>
    </div>
  )
}

export default ProductCard
