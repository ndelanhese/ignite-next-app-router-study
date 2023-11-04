import { NextResponse } from 'next/server'
import ProductsData from './products.json'

export const GET = async () => {
  return NextResponse.json(ProductsData.products, { status: 200 })
}
