import { Header } from '@components/shared/header'
import { LayoutProps } from '@global-types/layout'

const WebsiteLayout = ({ children }: LayoutProps) => (
  <div className="mx-auto grid min-h-screen w-full max-w-[100rem] grid-rows-[min-content_max-content] gap-5 p-8">
    <Header />
    {children}
  </div>
)

export default WebsiteLayout
