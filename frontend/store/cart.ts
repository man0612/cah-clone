import { create } from "zustand"

interface CartItem {
  id: string
  title: string
  price: number
}

interface CartStore {
  items: CartItem[]
  addItem: (item: CartItem) => void
  clearCart: () => void
}

export const useCart = create<CartStore>((set) => ({
  items: [],

  addItem: (item) =>
    set((state) => ({
      items: [...state.items, item],
    })),

  clearCart: () => set({ items: [] }),
}))