'use client'

import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'

export const SearchForm = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)

    const query = data.q as string | undefined

    if (!query) return

    router.push(`/search?q=${query}`)
  }

  return (
    <form
      className="flex items-center gap-2 rounded-xl bg-zinc-800 px-3 py-1"
      onSubmit={handleSearch}
    >
      <Search className="h-5 w-5 text-zinc-500" />
      <input
        defaultValue={query ?? ''}
        name="q"
        type="text"
        placeholder="Search..."
        className="flex-1 bg-transparent outline-none placeholder:text-zinc-500"
      />
    </form>
  )
}
