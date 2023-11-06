import { type NextRequest, NextResponse } from 'next/server'
import ProductsData from '../products.json'
import { z } from 'zod'

export const GET = async (request: NextRequest) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const { searchParams } = request.nextUrl

  const query = z.string().parse(searchParams.get('q'))

  const products = ProductsData.products.filter((product) =>
    product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
  )

  return NextResponse.json(products, { status: 200 })
}
