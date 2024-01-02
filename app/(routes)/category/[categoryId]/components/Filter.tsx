'use client'

import React from 'react'
import { Size, Color } from '@/types'
import { useRouter, useSearchParams } from 'next/navigation'
import qs from 'query-string'
import Button from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface Props {
  valueKey: string
  name: string
  data: (Size | Color)[]
}

const Filter: React.FC<Props> = ({ valueKey, name, data }) => {
  const searchParams = useSearchParams()
  const router = useRouter()

  const selectValue = searchParams.get(valueKey)

  // next function is used to filter the data
  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString())

    const query = {
      ...current,
      [valueKey]: id,
    }
    // When we click on we take the current search params and add the new value to filter

    if (current[valueKey] === id) {
      // If the value is already selected we remove it
      query[valueKey] = null
    }

    // We use qs to stringify the url and then we use the router to push the new url to the browser (and apply the filter)
    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      {
        skipNull: true,
      },
    )

    router.push(url)
  }

  // so when wi click the button we add the new value to the url and when we click again we remove it (if it's already selected). this is the mechanism to filter the products
  return (
    <div className='mb-8'>
      <h3 className='text-lg font-semibold'>{name}</h3>
      <hr className='my-4' />
      <div className='flex flex-wrap gap-2'>
        {
          // We map the data to create the filter buttons
          data.map((item) => (
            <div key={item.id} className='flex items-center'>
              <Button
                className={cn(
                  'rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300',
                  selectValue === item.id && 'bg-black text-white',
                )}
                onClick={() => onClick(item.id)}
              >
                {item.name}
              </Button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Filter
