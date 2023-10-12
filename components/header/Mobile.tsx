'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { MENU } from '@/lib/constants'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import cn from 'classnames'

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => setIsOpen(() => !isOpen);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={cn('md:hidden w-full top-0 left-0', isOpen ? 'fixed' : 'absolute')}
    >
      <motion.nav initial={false} animate={isOpen ? 'open' : 'closed'}>
        <div
          className={cn('flex justify-end px-4 pt-2 pb-1', isOpen && 'hidden')}
        >
          <motion.button
            onClick={handleClick}
            className='w-7 h-7 text-blue-500'
          >
            <Bars3Icon />
          </motion.button>
        </div>

        <motion.div
          className='h-36 bg-white'
          variants={{
            open: {
              clipPath: 'inset(0% 0% 0% 0% round 10px)',
              transition: {
                type: 'spring',
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: {
              clipPath: 'inset(10% 50% 90% 50% round 10px)',
              transition: {
                type: 'spring',
                bounce: 0,
                duration: 0.4,
              },
            },
          }}
          style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
        >
          <div className='flex justify-end px-4 pt-2 pb-1'>
            <button onClick={handleClick} className='w-7 h-7 text-blue-500'>
              <XMarkIcon />
            </button>
          </div>

          {/* TODO: Mobile Links Below */}
          <div className='grid grid-cols-3'></div>
        </motion.div>
      </motion.nav>
    </motion.div>
  );
}

export default MobileHeader