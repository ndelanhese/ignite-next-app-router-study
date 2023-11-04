import { Search, ShoppingBag } from 'lucide-react'
import NextLink from 'next/link'
import NextImage from 'next/image'

export const Header = () => (
  <div className="flex w-full items-center justify-between">
    <div className="flex items-center justify-center gap-4">
      <NextLink
        href="/"
        className="text-2xl font-extrabold text-white ring-zinc-500"
      >
        devstore
      </NextLink>
      <form className="flex items-center gap-2 rounded-xl bg-zinc-800 px-3 py-1">
        <Search className="h-5 w-5 text-zinc-500" />
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 bg-transparent outline-none placeholder:text-zinc-500"
        />
      </form>
    </div>
    <div className="flex items-center justify-center gap-4">
      <div className="flex cursor-pointer items-center gap-2">
        <ShoppingBag className="h-4 w-4" />
        <span className="text-sm">cart (0)</span>
      </div>
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
