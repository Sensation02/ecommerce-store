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

// this hook is used to open and close the model and also to get the data of the product
// so when we click on the product we will open the model and pass the data of the product to the model to preview it and when we click on the close button we will close the model. In this process we will pass the data to show it and when we close the model we will remove the data from the store.

export default usePreviewModel
