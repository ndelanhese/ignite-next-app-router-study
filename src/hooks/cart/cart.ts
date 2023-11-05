import { CartContext } from '@context/cart'
import { useContext } from 'react'

export const useCart = () => useContext(CartContext)
