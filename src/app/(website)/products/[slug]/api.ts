import { Product } from '@global-types/products'
import { api } from '@api'

export const getProduct = async (slug: string) => {
  const ONE_HOUR_IN_SECONDS = 3600
  return await api<Product>(`/products/${slug}`, {
    next: { revalidate: ONE_HOUR_IN_SECONDS },
  })
}

export const getFeaturedProducts = async () => {
  const ONE_HOUR_IN_SECONDS = 3600
  return await api<Product[]>('/products/featured', {
    next: { revalidate: ONE_HOUR_IN_SECONDS },
  })
}
