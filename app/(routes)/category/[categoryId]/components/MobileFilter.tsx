'use client'
import React, { useState } from 'react'
import { Size, Color } from '@/types'
import Button from '@/components/ui/button'
import { Dialog } from '@headlessui/react'
import IconButton from '@/components/ui/iconButton'
import Filter from './Filter'
import { Plus, X } from 'lucide-react'

interface Props {
  sizes: Size[]
  colors: Color[]
}

const MobileFilter: React.FC<Props> = async ({ sizes, colors }) => {
  const [open, setOpen] = useState(false)

  const onOpen = () => setOpen(true)
  const onClose = () => setOpen(false)

  return (
    <>
      <Button onClick={onOpen} className='flex items-center gap-x-2 lg:hidden'>
        Filters
        <Plus size={20} />
      </Button>

      <Dialog
        as='div'
        open={open}
        onClose={onClose}
        className='relative z-40 lg:hidden'
      >
        {/* background */}
        <div className='fixed inset-0 bg-black bg-opacity-25'>
          {/* position */}
          <div className='fixed inset-0 z-40 flex'>
            <Dialog.Panel className='relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl'>
              {/* close */}
              <div className=' flex items-center justify-end px-4'>
                <IconButton icon={<X size={15} onClick={onClose} />} />
              </div>
              <div className='p-4'>
                <Filter valueKey='sizeId' name='Sizes' data={sizes} />
                <Filter valueKey='colorId' name='Colors' data={colors} />
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default MobileFilter
