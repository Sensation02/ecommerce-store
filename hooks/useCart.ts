import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { toast } from 'react-hot-toast'
import { Product } from '@/types'

interface CartStore {
  items: Product[]
  addItem: (product: Product) => void
  removeItem: (id: String) => void
  removeAll: () => void
}

// so next we create a store with the persist middleware
// why we do this is because we want to persist the cart (items) in localstorage
const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      // 1. array of items
      items: [],

      // 2. add item to cart
      addItem: (data: Product) => {
        // create a variable that holds the current items in the cart (get().items - get() is a zustand function that gets the current state of the store)
        const currentItems = get().items
        // check if the item already exists in the cart
        const existingItems = currentItems.find((item) => item.id === data.id)

        // if it does, show a toast message and return
        if (existingItems) return toast('Item already in cart')

        // if it doesn't, add the item to the cart
        set({ items: [...currentItems, data] })
        toast.success('Item added to cart')
      },

      // 3. remove item from cart, simply filter the items array and return all items that don't match the id
      removeItem: (id: String) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] })
        toast.success('Item removed from cart')
      },

      // 4. remove all items from cart (set items to empty array)
      removeAll: () => {
        set({ items: [] })
        toast.success('All items removed from cart')
      },
    }),

    // 5. create a storage object that uses localstorage
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

export default useCart
