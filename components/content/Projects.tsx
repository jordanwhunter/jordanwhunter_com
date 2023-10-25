'use client'
import { useSectionInView } from '@/lib/hooks'
import { SectionHeading } from '@/components/content'
import { Card } from '@/components/cards'
import { MENU } from '@/lib/constants'
import { motion } from 'framer-motion'

const Projects = () => {
  const { ref } = useSectionInView({ sectionName: "Projects", threshold: 0.5 });
  
  return (
    <motion.section
      id='projects'
      ref={ref}
      className='scroll-mt-16 sm:scroll-mt-24 lg:scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <SectionHeading classProps='text-center'>My Projects</SectionHeading>
      <div className='grid lg:grid-cols-2 gap-4 max-sm:px-4'>
        {MENU.projects.map((project) => (
          <div key={project.title}>
            <Card {...project} />
          </div>
        ))}
      </div>
    </motion.section>
  )
}

export default Projects