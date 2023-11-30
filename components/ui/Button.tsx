'use client'

import { useActiveSection } from "@/lib/hooks";
import type { ButtonProps } from '@/lib/types'
import { LinkArrow, sizes, SizeKey } from '@/components/ui'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import Link from 'next/link'
import cn from 'classnames'

const Button = ({ classProps, internal, linkedin, github, ...linkProps }: ButtonProps) => {
  const { setActiveSection, setTimeOfLastClick } = useActiveSection()

  const sizeInput = linkProps.size as SizeKey
  const generic = 'px-7 py-3 flex justify-center gap-3 rounded-full border'

  return (
    <div className='hover:scale-110'>
      {internal ? (
        <Link
          href={linkProps?.href ?? '#'}
          className={cn(classProps, generic)}
          onClick={() => {
            setActiveSection('Contact')
            setTimeOfLastClick(Date.now())
          }}
        >
          <LinkArrow {...linkProps} />
        </Link>
      ) : (
        <a
          href={linkProps?.href}
          target='_blank'
          className={cn(classProps, generic)}
        >
          {linkProps.download ? (
            <LinkArrow {...linkProps} />
          ) : (
            <>
              {linkedin && (
                <AiFillLinkedin className={cn(sizes[sizeInput ?? 'default'])} />
              )}
              {github && (
                <AiFillGithub className={cn(sizes[sizeInput ?? 'default'])} />
              )}
            </>
          )}
        </a>
      )}
    </div>
  )
}

export default Button