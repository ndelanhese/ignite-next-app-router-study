import { ReactNode } from 'react'

export type CartItem = {
  productId: string
  quantity: number
}

export type CartContextType = {
  items: CartItem[]
  addToCart: (productId: string) => void
}

export type CartProviderProps = {
  children: ReactNode
}
