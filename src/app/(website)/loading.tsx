import { Skeleton } from '@components/ui/skeleton/skeleton'

const HomeLoading = () => (
  <main className="grid-rows-9 grid max-h-[51rem] grid-cols-9 gap-6">
    <Skeleton className="col-span-6 row-span-6 h-[51rem]" />
    <Skeleton className="col-span-3 row-span-3" />
    <Skeleton className="col-span-3 row-span-3" />
  </main>
)

export default HomeLoading
