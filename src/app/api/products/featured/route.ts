import { NextResponse } from 'next/server'
import ProductsData from './products.json'

export const GET = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const featuredProducts = ProductsData.products.filter(
    (product) => product.featured,
  )
  return NextResponse.json(featuredProducts, { status: 200 })
}
