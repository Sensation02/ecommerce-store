'use client'
import React from 'react'
import PreviewModal from '@/components/PreviewModal'
import { useIsMounted } from '@/hooks/useIsMounted'

const ModalProvider: React.FC = () => {
  const isMounted = useIsMounted()
  if (!isMounted) return null

  return (
    <>
      <PreviewModal />
    </>
  )
}

export default ModalProvider
