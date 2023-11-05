import React from 'react'
import './globals.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { env } from '@env'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    template: '%s | devstore',
    default: 'devstore',
  },
  metadataBase: new URL(env.APP_BASE_URL),
  twitter: {
    card: 'summary_large_image',
  },
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html className={inter.variable} lang="pt-BR">
    <body className="bg-zinc-950 text-zinc-50 antialiased">{children}</body>
  </html>
)

export default RootLayout
