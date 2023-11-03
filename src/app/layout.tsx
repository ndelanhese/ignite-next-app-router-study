import React from 'react'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Dev Store',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html className={inter.variable} lang="pt-BR">
    <body>{children}</body>
  </html>
)

export default RootLayout
