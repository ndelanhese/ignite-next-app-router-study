import NextImage from 'next/image'
import NextLink from 'next/link'
import { CartWidget } from './cartWidget'
import { SearchForm } from './searchForm'

export const Header = () => (
  <div className="flex w-full items-center justify-between">
    <div className="flex items-center justify-center gap-4">
      <NextLink
        href="/"
        className="text-2xl font-extrabold text-white ring-zinc-500"
      >
        devstore
      </NextLink>
      <SearchForm />
    </div>
    <div className="flex items-center justify-center gap-4">
      <CartWidget />
      <div className="h-4 w-px bg-zinc-500" />
      <NextLink
        href="/account"
        className="flex items-center gap-2 hover:underline"
      >
        <span>account</span>
        <NextImage
          src="https://github.com/ndelanhese.png"
          alt=""
          className="h-6 w-6 rounded-full"
          width={24}
          height={24}
        />
      </NextLink>
    </div>
  </div>
)
