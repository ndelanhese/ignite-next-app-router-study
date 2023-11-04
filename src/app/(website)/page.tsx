import NextImage from 'next/image'
import NextLink from 'next/link'
import { getFeaturedProducts } from './api'

const Home = async () => {
  const products = await getFeaturedProducts()

  console.log(products)

  return (
    <main className="grid-rows-9 grid max-h-[51rem] grid-cols-9 gap-6">
      <NextLink
        href="/"
        className="group relative col-span-6 row-span-6 flex items-start justify-center overflow-hidden rounded-lg bg-zinc-800"
      >
        <NextImage
          src="/moletom-never-stop-learning.png"
          alt=""
          className="transition-transform duration-500 group-hover:scale-105"
          height={920}
          width={920}
          quality={100}
        />

        <div className="absolute bottom-28 right-28 flex h-12 max-w-[18rem] items-center justify-center gap-2 rounded-full border border-zinc-500 bg-black/80 p-1 pl-5">
          <span className="truncate text-sm text-zinc-500">
            Nome do moletom
          </span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$ 119,90
          </span>
        </div>
      </NextLink>
      <NextLink
        href="/"
        className="group relative col-span-3 row-span-3 flex items-start justify-center overflow-hidden rounded-lg bg-zinc-800"
      >
        <NextImage
          src="/moletom-ai-side.png"
          alt=""
          className="transition-transform duration-500 group-hover:scale-105"
          height={920}
          width={920}
          quality={100}
        />

        <div className="absolute bottom-10 right-10 flex h-12 max-w-[18rem] items-center justify-center gap-2 rounded-full border border-zinc-500 bg-black/80 p-1 pl-5">
          <span className="truncate text-sm text-zinc-500">
            Nome do moletom
          </span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$ 119,90
          </span>
        </div>
      </NextLink>
      <NextLink
        href="/"
        className="group relative col-span-3 row-span-3 flex items-start justify-center overflow-hidden rounded-lg bg-zinc-800"
      >
        <NextImage
          src="/camiseta-dowhile-2022.png"
          alt=""
          className="transition-transform duration-500 group-hover:scale-105"
          height={920}
          width={920}
          quality={100}
        />

        <div className="absolute bottom-10 right-10 flex h-12 max-w-[18rem] items-center justify-center gap-2 rounded-full border border-zinc-500 bg-black/80 p-1 pl-5">
          <span className="truncate text-sm text-zinc-500">
            Nome do moletom
          </span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$ 119,90
          </span>
        </div>
      </NextLink>
    </main>
  )
}

export default Home
