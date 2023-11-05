'use client'

import { useCart } from '@hooks/cart'
import { ShoppingBag } from 'lucide-react'

export const CartWidget = () => {
  const { items } = useCart()

  return (
    <div className="flex cursor-pointer items-center gap-2">
      <ShoppingBag className="h-4 w-4" />
      <span className="text-sm">cart ({items.length})</span>
    </div>
  )
}
