'use client'
import { Button } from '@/components/ui'
import { MENU } from '@/lib/constants'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import Image from 'next/image'

const Hero = () => {
  const name = 'Jordan W. Hunter'
  const bio = "Professional React | Next.js developer \nLet's build something!"

  return (
    <section>
      <div className='flex flex-col lg:flex-row items-center lg:gap-10 xl:gap-36'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='text-center lg:text-left'
        >
          {/* Title */}
          <h1 className='text-gray-600 pb-4 lg:leading-normal font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600 text-3xl sm:text-5xl lg:text-6xl 2xl:text-8xl '>
              {name}
            </span>
            <br />
            <div className='text-3xl md:text-4xl xl:text-6xl'>
              <TypeAnimation
                sequence={[
                  'JavaScript Dev',
                  1000,
                  'Remote Engineer',
                  1000,
                  'Web Architect',
                  1000,
                  'Site Creator',
                  1000,
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}
              />
            </div>
          </h1>

          {/* Bio */}
          <p className='text-gray-400 text-base sm:text-lg whitespace-pre-wrap pb-6'>
            {bio}
          </p>

          {/* Buttons */}
          <div className='grid grid-cols-2 xl:flex gap-3 lg:gap-6'>
            {MENU.buttons.map(({ ...buttonProps }) => (
              <Button key={buttonProps.href} {...buttonProps} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='pt-4 lg:pt-0'
        >
          <div className='relative w-64 h-64 lg:w-96 lg:h-96 flex items-center pointer-events-none'>
            <Image
              src='/img/3d-jordan.jpg'
              alt='hero image'
              className='absolute rounded-full shadow-2xl border-[0.35rem] border-white'
              width={300}
              height={300}
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero