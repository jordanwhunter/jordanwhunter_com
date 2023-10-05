import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
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
      <body className={cn(inter.className, 'relative bg-gray-50 text-gray-950')}>
        {children}
      </body>
    </html>
  );
}
