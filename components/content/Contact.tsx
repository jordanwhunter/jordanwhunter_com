'use client'
import { SectionHeading } from '@/components/content'
import { useSectionInView } from '@/lib/hooks'

const Contact = () => {
  const { ref } = useSectionInView({
    sectionName: 'Contact',
    threshold: 0.5,
  })

  return (
    <section
      id='contact'
      ref={ref}
      className='scroll-mt-16 sm:scroll-mt-24 lg:scroll-mt-28'
    >
      <SectionHeading classProps='lg:mt-6'>Contact</SectionHeading>
    </section>
  )
}

export default Contact
