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
    <motion.section
      id='about'
      className='grid lg:grid-cols-2 lg:gap-24 w-full scroll-mt-16 sm:scroll-mt-24 lg:scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <div className='lg:order-2'>
        <SectionHeading classProps=' text-center lg:text-left'>
          About Me
        </SectionHeading>
        <Bio />
        <div className='flex justify-center lg:justify-start mt-8'>
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
            selectTab={() => handleTabChange('assessments')}
            active={tab === 'assessments'}
          >
            {' '}
            Assessments{' '}
          </TabButton>
        </div>

        <div className='mt-4 lg:mt-8'>
          {MENU.tabs.find((t) => t.id === tab)!.content}
        </div>
      </div>

      <Image
        src='/img/office.jpg'
        alt='about image'
        className='rounded-xl lg:order-1 shadow-2xl border-[0.35rem] border-white pointer-events-none lg:flex mx-auto justify-end lg:w-full mt-4 lg:mt-0 hidden'
        width={300}
        height={300}
        priority
      />
    </motion.section>
  )
}

export default About
