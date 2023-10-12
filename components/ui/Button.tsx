import { ButtonProps } from '@/lib/types'
import { LinkArrow, sizes, SizeKey } from '@/components/ui'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import Link from 'next/link'
import cn from 'classnames'

const Button = ({ classProps, internal, linkedin, github, ...linkProps }: ButtonProps) => {
  const sizeInput = linkProps.size as SizeKey

  return (
    <div className='hover:scale-110'>
      {internal ? (
        <Link href={linkProps?.href ?? '#'} className={classProps}>
          <LinkArrow {...linkProps} />
        </Link>
      ) : (
        <a href={linkProps?.href} target='_blank' className={classProps}>
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