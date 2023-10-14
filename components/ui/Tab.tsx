import { TabProps } from '@/lib/types'
import { motion } from 'framer-motion'
import cn from 'classnames'

const TabButton = ({ active, selectTab, children}: TabProps) => {
  const buttonClasses = active ? 'text-white' : 'text-[#ADB7BE]'

  return (
    <button onClick={selectTab}>
      <p className={cn(buttonClasses, 'pr-3 font-semibold hover:text-white')}>
        {children}
      </p>
      <motion.div
        animate={active ? 'active' : 'default'}
        variants={{
          default: { width: 0 },
          active: { width: 'calc(100% - 0.75rem)' },
        }}
        className='h-1 bg-primary-500 mt-2 mr-3'
      ></motion.div>
    </button>
  )
}

export default TabButton