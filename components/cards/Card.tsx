'use client'
import { useRef } from 'react'
import { CardProps } from '@/lib/types'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

const Card = ({ title, description, tags, image, href, repo }: CardProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1']
  })

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <section className='bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden lg:pr-8 relative lg:h-[20rem] rounded-lg hover:bg-gray-200 transition shadow-md group'>
        <div className='pt-4 pb-6 px-5 lg:max-w-[50%] h-full flex flex-col text-center lg:text-left'>
          <h3 className='text-2xl font-semibold text-gray-600'>{title}</h3>
          <p className='mt-2 leading-relaxed text-gray-400'>{description}</p>
          <ul className='flex flex-wrap mt-4 gap-2 lg:mt-auto'>
            {tags.map((tag, i) => (
              <li
                key={i}
                className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-gray-200 rounded-full max-lg:mx-auto group-hover:hidden'
              >
                {tag}
              </li>
            ))}
            <div className='hidden group-hover:flex max-lg:items-center max-lg:justify-center w-full gap-6'>
              <li>
                <a href={repo} target='_blank'>
                  <CodeBracketIcon className='w-10 h-10 text-gray-600 hover:text-gray-950 cursor-pointer border-2 border-gray-600 hover:border-gray-950 rounded-full p-1 opacity-70' />
                </a>
              </li>
              <li>
                <a href={href} target='_blank'>
                  <EyeIcon className='w-10 h-10 text-gray-600 hover:text-gray-950 cursor-pointer border-2 border-gray-600 hover:border-gray-950 rounded-full p-1 opacity-70' />
                </a>
              </li>
            </div>
          </ul>
        </div>
        <Image
          src={image}
          alt={title}
          quality={90}
          className='lg:absolute top-8 -right-40 lg:w-[28.25rem] lg:h-[15rem] rounded-b-lg lg:rounded-lg shadow-2xl pointer-events-none lg:group-hover:-translate-x-3 lg:group-hover:translate-y-3 lg:group-hover:-rotate-1 lg:group-hover:scale-[1.04] transition'
        />
      </section>
    </motion.div>
  )
}

export default Card