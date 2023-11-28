import { Hero } from '@/components/hero'
import { 
  SectionDivider, 
  About, 
  Projects, 
  Skills, 
  Experience, 
} from '@/components/content'

export default function Home() {
  return (
    <main className='flex flex-col items-center container mx-auto pb-4 pt-8 md:pt-28'>
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Experience />
    </main>
  )
}