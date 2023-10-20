import { Hero } from '@/components/hero'
import { SectionDivider, About } from '@/components/content'

export default function Home() {
  return (
    <main className='flex flex-col items-center container mx-auto px-4 pb-4 pt-8 md:pt-28'>
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
    </main>
  )
}