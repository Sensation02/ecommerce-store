import { create } from 'zustand'
import { Product } from '@/types'

// What we need in this hook?
// first we need to know if the model is open or not
// second we need to know the data of the product that we want to preview
// third we need to open the model with the data of the product
// fourth we need to close the model

interface PreviewModelStore {
  isOpen: boolean
  data?: Product
  onOpen: (data: Product) => void
  onClose: () => void
}

// create a store with zustand and export it
const usePreviewModel = create<PreviewModelStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: Product) => set({ isOpen: true, data }),
  onClose: () => set({ isOpen: false, data: undefined }),
}))

export default usePreviewModel
