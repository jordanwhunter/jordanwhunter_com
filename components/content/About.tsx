'use client'
import { useState, useTransition, useEffect } from 'react'
import { SectionHeading, Bio } from '@/components/content'
import { TabButton } from '@/components/ui'
import { MENU } from '@/lib/constants'
import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
  const [tab, setTab] = useState('skills')
  const [_, startTransition] = useTransition()

  const handleTabChange = (id: string ) => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <section className='grid lg:grid-cols-2 lg:gap-24 w-full' id='about'>
      <div className='lg:order-2'>
        <SectionHeading>About Me</SectionHeading>
        <Bio />
        <div className='flex flex-row justify-start mt-8'>
          <TabButton
            selectTab={() => handleTabChange('skills')}
            active={tab === 'skills'}
          >
            {' '}
            Skills{' '}
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange('education')}
            active={tab === 'education'}
          >
            {' '}
            Education{' '}
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange('awards')}
            active={tab === 'awards'}
          >
            {' '}
            Awards{' '}
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange('certifications')}
            active={tab === 'certifications'}
          >
            {' '}
            Certifications{' '}
          </TabButton>
        </div>

        {/* TODO: Make this look nice */}
        <div className='mt-8'>
          {MENU.tabs.find((t) => t.id === tab)!.content}
        </div>
      </div>
      <Image
        src='/img/office.jpg'
        alt='about image'
        className='rounded-xl lg:order-1 shadow-2xl border-[0.35rem] border-white pointer-events-none lg:flex justify-end w-full'
        width={300}
        height={300}
        priority
      />
    </section>
  )
}

export default About
