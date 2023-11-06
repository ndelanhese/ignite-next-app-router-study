import NextImage from 'next/image'
import NextLink from 'next/link'
import { SearchPageProps } from './page.types'
import { redirect } from 'next/navigation'
import { searchProducts } from './api'
import { nanoid } from 'nanoid'

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const { q: query } = searchParams

  if (!query) redirect('/')

  const products = await searchProducts(query)

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para <span className="font-semibold">{query}</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <NextLink
              key={nanoid()}
              href={`/products/${product.slug}`}
              className="group relative flex items-start justify-center overflow-hidden rounded-lg bg-zinc-800"
            >
              <NextImage
                src={product.image}
                alt=""
                className="transition-transform duration-500 group-hover:scale-105"
                height={480}
                width={480}
                quality={100}
              />

              <div className="absolute bottom-10 right-10 flex h-12 max-w-[18rem] items-center justify-center gap-2 rounded-full border border-zinc-500 bg-black/80 p-1 pl-5">
                <span className="truncate text-sm text-zinc-500">
                  {product.title}
                </span>
                <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                  {product.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </span>
              </div>
            </NextLink>
          ))
        ) : (
          <p>No results</p>
        )}
      </div>
    </div>
  )
}

export default SearchPage
