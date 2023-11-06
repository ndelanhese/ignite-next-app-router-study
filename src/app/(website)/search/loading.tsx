'use client'

import { Skeleton } from '@components/ui/skeleton/skeleton'
import { useSearchParams } from 'next/navigation'

const SearchLoading = () => {
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  return (
    <main className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para <span className="font-semibold">{query}</span>
      </p>
      <div className="grid grid-cols-3 gap-6">
        <Skeleton className="h-[25rem]" />
        <Skeleton className="h-[25rem]" />
        <Skeleton className="h-[25rem]" />
        <Skeleton className="h-[25rem]" />
        <Skeleton className="h-[25rem]" />
        <Skeleton className="h-[25rem]" />
      </div>
    </main>
  )
}

export default SearchLoading
