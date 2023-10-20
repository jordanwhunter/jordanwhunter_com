import { TabProps } from '@/lib/types'
import { motion } from 'framer-motion'
import cn from 'classnames'

const TabButton = ({ active, selectTab, children}: TabProps) => {
  const buttonClasses = active ? 'text-gray-500' : 'text-gray-400'

  return (
    <button onClick={selectTab}>
      <p className={cn(buttonClasses, 'pr-3 font-semibold hover:text-gray-600')}>
        {children}
      </p>
      <motion.div
        animate={active ? 'active' : 'default'}
        variants={{
          default: { width: 0 },
          active: { width: 'calc(100% - 0.75rem)' },
        }}
      />
    </button>
  )
}

export default TabButton