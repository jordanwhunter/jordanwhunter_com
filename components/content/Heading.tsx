import type { SectionHeadingProps } from '@/lib/types'
import cn from 'classnames'

const SectionHeading = ({ classProps, children }: SectionHeadingProps) => (
  <h2
    className={cn(
      'text-3xl md:text-4xl xl:text-5xl font-bold mb-8 text-gray-600',
      classProps
    )}
  >
    {children}
  </h2>
)

export default SectionHeading