import NextImage from 'next/image'

const ProductPage = () => (
  <main className="grid grid-cols-3 justify-between gap-6">
    <section className="col-span-2 flex max-h-[51rem] items-start justify-center">
      <NextImage
        src={'/moletom-java.png'}
        alt=""
        className="transition-transform duration-500 group-hover:scale-105"
        height={850}
        width={850}
        quality={100}
      />
    </section>
    <section className="col-span-1 flex flex-col items-center justify-center gap-8 px-12">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold leading-tight text-white">
          Moletom Never Stop Learning
        </h1>
        <p className="leading-relaxed text-zinc-400">
          Moletom fabricado com 88% de algodão e 12% de poliéster
        </p>
      </div>
      <div className="flex items-center gap-4 self-start">
        <div className="inline-block rounded-full bg-violet-500 px-5 py-2.5">
          R$99
        </div>
        <span className="text-sm text-zinc-400">Em 12x s/ juros de R$8,25</span>
      </div>
      <div className="flex flex-col gap-6">
        <h5>Tamanhos</h5>
        <div className="flex flex-row gap-4">
          <div className="inline-block rounded-3xl border border-zinc-400 bg-zinc-700 px-6 py-2.5">
            <span className="font-semibold text-white">P</span>
          </div>
          <div className="inline-block rounded-3xl border border-zinc-400 bg-zinc-700 px-6 py-2.5">
            <span className="font-semibold text-white">M</span>
          </div>
          <div className="inline-block rounded-3xl border border-zinc-400 bg-zinc-700 px-6 py-2.5">
            <span className="font-semibold text-white">G</span>
          </div>
          <div className="inline-block rounded-3xl border border-zinc-400 bg-zinc-700 px-6 py-2.5">
            <span className="font-semibold text-white">GG</span>
          </div>
          <div className="inline-block rounded-3xl border border-zinc-400 bg-zinc-700 px-6 py-2.5">
            <span className="font-semibold text-white">EXL</span>
          </div>
        </div>
      </div>
      <button className="flex h-12 w-full items-center justify-center rounded-full bg-emerald-500 font-semibold text-white transition hover:bg-opacity-70">
        Adicionar ao carrinho
      </button>
    </section>
  </main>
)

export default ProductPage
