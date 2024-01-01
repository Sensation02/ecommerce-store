import React from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'

import { cn } from '@/lib/utils'
import { Image as ImageType } from '@/types'

interface Props {
  image: ImageType
}

const GalleryTab: React.FC<Props> = ({ image }) => {
  return (
    <Tab className='relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white'>
      {({ selected }) => (
        <>
          <span className='absolute inset-0 rounded-md overflow-hidden h-full w-full aspect-square'>
            <Image
              src={image.url}
              alt=''
              fill
              className='object-cover object-center'
              sizes='100%'
              quality={100}
              priority={true}
            />
          </span>
          <span
            className={cn(
              'absolute inset-0 rounded-md ring-2 ring-offset-2',
              selected ? 'ring-black' : 'ring-transparent',
            )}
          />
        </>
      )}
    </Tab>
  )
}

export default GalleryTab
