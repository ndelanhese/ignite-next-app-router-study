'use client'

import { createContext, useCallback, useMemo, useState } from 'react'
import { CartContextType, CartItem, CartProviderProps } from './cart.types'

export const CartContext = createContext({} as CartContextType)

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const addItemToCart = useCallback((productId: number) => {
    setCartItems((prev) => {
      const productInCart = prev.some((item) => item.productId === productId)

      if (!productInCart) {
        return [...prev, { productId, quantity: 1 }]
      }

      return prev.map((item) => {
        if (item.productId === productId) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item
      })
    })
  }, [])

  const memoizedValues: CartContextType = useMemo(
    () => ({
      items: cartItems,
      addToCart: addItemToCart,
    }),
    [addItemToCart, cartItems],
  )
  return (
    <CartContext.Provider value={memoizedValues}>
      {children}
    </CartContext.Provider>
  )
}
