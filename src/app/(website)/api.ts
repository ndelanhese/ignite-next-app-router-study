import { Product } from '@global-types/products'
import { api } from '@api'

export const getFeaturedProducts = async () => {
  return await api<Product[]>('/products/featured')
}
