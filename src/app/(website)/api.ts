import { api } from '@api'

export const getFeaturedProducts = async () => {
  const response = await api('/products/featured')

  return await response.json()
}
