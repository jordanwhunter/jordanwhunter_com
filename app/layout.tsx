import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/header'
import cn from 'classnames'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jordan W. Hunter: React | Next.js Developer',
  description: 'Jordan Hunter (he/him) is an avid full-stack JavaScript developer residing in New York City. This portfolio page highlights some of his most recent projects/developments - both agency-assigned and freelance.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={cn(inter.className, 'relative bg-gray-50')}>
        <div className='-z-10 bg-blue-200 absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] sm:w-[68.75rem] rounded-full blur-[10rem]' />
        <div className='-z-10 bg-green-100 absolute top-[-1rem] left-[-35rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] h-[31.25rem] w-[31.25rem] sm:w-[68.75rem] rounded-full blur-[10rem]' />
        <Header />
        {children}
      </body>
    </html>
  );
}
