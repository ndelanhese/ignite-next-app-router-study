import { CartProvider } from '@context/cart'
import { Header } from '@components/shared/header'
import { LayoutProps } from '@global-types/layout'

const WebsiteLayout = ({ children }: LayoutProps) => (
  <CartProvider>
    <div className="mx-auto grid min-h-screen w-full max-w-[100rem] grid-rows-[min-content_max-content] gap-5 p-8">
      <Header />
      {children}
    </div>
  </CartProvider>
)

export default WebsiteLayout
