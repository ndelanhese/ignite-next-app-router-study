import { Product } from '@global-types/products'
import { api } from '@api'

export const searchProducts = async (query: string) => {
  const ONE_HOUR_IN_SECONDS = 3600
  return await api<Product[]>(`/products/search?q=${query}`, {
    next: { revalidate: ONE_HOUR_IN_SECONDS },
  })
}
