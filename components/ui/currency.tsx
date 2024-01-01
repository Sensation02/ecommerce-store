'use client'

import { useIsMounted } from '@/lib/useIsMounted'
import { formatter } from '@/lib/utils'
import React from 'react'

interface Props {
  value?: number | string
}

const Currency: React.FC<Props> = ({ value }) => {
  // hydration:
  const isMounted = useIsMounted()

  if (!isMounted) return null

  return <div className='font-semibold'>{formatter.format(Number(value))}</div>
}

export default Currency
