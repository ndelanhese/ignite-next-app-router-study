import { ReactNode } from 'react'

export type CartItem = {
  productId: number
  quantity: number
}

export type CartContextType = {
  items: CartItem[]
  addToCart: (productId: number) => void
}

export type CartProviderProps = {
  children: ReactNode
}
