'use client'
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';

const Hero = () => {
  return (
    <section>
      <div className='flex max-md:flex-col items-center justify-between'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='text-center sm:text-left'
        >
          <h1 className='text-gray-600 pb-4 2xl: text-4xl sm:text-5xl lg:text-7xl 2xl:text-8xl lg:leading-normal font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600'>
              Jordan W. Hunter
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'JavaScript Dev',
                1000,
                'Front End Engineer',
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
          </h1>
          <p className='text-gray-400 text-base sm:text-lg pb-4'>
            Professional React | Next.js developer. Let&apos;s build something!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='pt-4 lg:pt-0'
        >
          <div className='relative w-64 h-64 lg:w-96 lg:h-96 flex items-center justify-end'>
            <Image
              src='/img/3d-jordan.jpg'
              alt='hero image'
              className='absolute rounded-full shadow-2xl'
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero