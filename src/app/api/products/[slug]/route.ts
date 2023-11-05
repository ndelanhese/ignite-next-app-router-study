import { NextResponse } from 'next/server'
import ProductsData from '../products.json'
import { GetProductProps } from './route.types'
import { z } from 'zod'

export const GET = async (_: Request, { params }: GetProductProps) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const slug = z.string().parse(params.slug)

  const product = ProductsData.products.find((product) => product.slug === slug)

  if (!product) {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 })
  }

  return NextResponse.json(product, { status: 200 })
}
