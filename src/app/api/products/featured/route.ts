import { NextResponse } from 'next/server'
import ProductsData from './products.json'

export const GET = async () => {
  const featuredProducts = ProductsData.products.filter(
    (product) => product.featured,
  )
  return NextResponse.json(featuredProducts, { status: 200 })
}
