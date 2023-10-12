import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { ArrowProps, SizeProps, DirectionProps } from '@/lib/types'
import cn from 'classnames'

const sizes: SizeProps = {
  xl: 'w-5 sm:w-6 h-5 sm:h-6',
  lg: 'w-4 sm:w-5 h-4 sm:h-5',
  default: 'w-4 h-4',
  sm: 'w-3.5 h-3.5',
  xs: 'w-3 h-3',
}

const directions: DirectionProps = {
  default: '-rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1',
  down: 'rotate-90 group-hover:translate-y-1',
  right: 'group-hover:translate-x-1',
}

const LinkArrow = ({ caption, size, direction }: ArrowProps) => {
  type SizeKey = keyof typeof sizes
  type DirectionKey = keyof typeof directions

  const sizeInput = size as SizeKey
  const directionInput = direction as DirectionKey
  
  return (
    <figure className='flex gap-1 shrink-0'>
      {caption && <figcaption>{caption}</figcaption>}
      <ArrowRightIcon
        className={cn(
          'translate-x-0 tranlate-y-0 transition-transform duration-300',
          sizes[sizeInput ?? 'default'],
          directions[directionInput ?? 'default']
        )}
      />
    </figure>
  )
}

export default LinkArrow