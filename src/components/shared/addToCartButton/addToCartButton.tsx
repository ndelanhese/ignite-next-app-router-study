'use client'

import { useCart } from '@hooks/cart'
import { addToCartButtonProps } from './addToCartButton.types'

export const AddToCartButton = ({ productId }: addToCartButtonProps) => {
  const { addToCart } = useCart()

  return (
    <button
      className="flex h-12 w-full items-center justify-center rounded-full bg-emerald-500 font-semibold text-white transition hover:bg-opacity-70"
      onClick={() => {
        addToCart(productId)
      }}
    >
      Adicionar ao carrinho
    </button>
  )
}
