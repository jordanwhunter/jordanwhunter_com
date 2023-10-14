'use client'
import { motion } from 'framer-motion'

const Divider = () => (
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.125 }}
    className='bg-gray-200 my-6 h-24 w-1 rounded-full'
  />
);

export default Divider