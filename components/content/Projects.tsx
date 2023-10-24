'use client'
import { SectionHeading } from '@/components/content'
import { Card } from '@/components/cards'
import { MENU } from '@/lib/constants'
import { motion } from 'framer-motion'

const Projects = () => (
  <motion.section id='projects'>
    <SectionHeading>Projects</SectionHeading>
    <div className='grid lg:grid-cols-2 gap-4 max-sm:px-4'>
      {MENU.projects.map((project) => (
        <div key={project.title}>
          <Card {...project} />
        </div>
      ))}
    </div>
  </motion.section>
)

export default Projects