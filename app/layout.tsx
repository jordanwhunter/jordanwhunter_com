import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants'
import { Background } from '@/components/background'
import { Header } from '@/components/header'
import { ActiveContextProvider } from '@/context'
import cn from 'classnames'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={cn(inter.className, "relative bg-gray-50")}>
        <Background />
        <ActiveContextProvider>
          <Header />
          {children}
        </ActiveContextProvider>
      </body>
    </html>
  );
}
