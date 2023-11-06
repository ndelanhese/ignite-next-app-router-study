import NextImage from 'next/image'
import NextLink from 'next/link'

const SearchPage = () => (
  <div className="flex flex-col gap-4">
    <p className="text-sm">
      Resultados para <span className="font-semibold">moletom</span>
    </p>

    <div className="grid grid-cols-3 gap-6">
      <NextLink
        href={`/products/`}
        className="group relative flex items-start justify-center overflow-hidden rounded-lg bg-zinc-800"
      >
        <NextImage
          src={'/moletom-never-stop-learning.png'}
          alt=""
          className="transition-transform duration-500 group-hover:scale-105"
          height={480}
          width={480}
          quality={100}
        />

        <div className="absolute bottom-10 right-10 flex h-12 max-w-[18rem] items-center justify-center gap-2 rounded-full border border-zinc-500 bg-black/80 p-1 pl-5">
          <span className="truncate text-sm text-zinc-500">
            Moletom Never Stop Learning
          </span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            {Number(120).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
        </div>
      </NextLink>
    </div>
  </div>
)

export default SearchPage
