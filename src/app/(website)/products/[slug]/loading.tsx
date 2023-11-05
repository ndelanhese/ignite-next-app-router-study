import { Skeleton } from '@components/ui/skeleton/skeleton'

const HomeLoading = () => (
  <main className="grid grid-cols-3 justify-between gap-6">
    <Skeleton className="col-span-2 h-[51rem]" />
    <Skeleton className="col-span-1" />
  </main>
)

export default HomeLoading
