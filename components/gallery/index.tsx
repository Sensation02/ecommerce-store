'use client'

import React from 'react'
import { Tab } from '@headlessui/react'
import Image from 'next/image'
import { Image as ImageType } from '@/types'
import GalleryTab from './GalleryTab'

interface Props {
  images: ImageType[]
}

// what are doing here?
// we are creating a gallery component that will display the images of a product

// so inside the gallery component we have a tab group that will display the images of the product
// at the start of the gallery we have one image that is the main image of the product. After that we have a list of images that are the images of the product
const Gallery: React.FC<Props> = ({ images }) => {
  return (
    <Tab.Group as='div' className='flex flex-col-reverse'>
      <div className='mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none'>
        <Tab.List className='grid grid-cols-4 gap-6'>
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className='w-full aspect-square'>
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className='aspect-square relative h-full w-full sm:rounded-lg overflow-hidden'>
              <Image
                src={image.url}
                alt=''
                fill
                sizes='100%'
                quality={100}
                priority={true}
                className='object-cover object-center'
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

export default Gallery
