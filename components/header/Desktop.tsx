'use client'
import { motion } from 'framer-motion'
import { MENU } from '@/lib/constants'
import Link from 'next/link'

const DesktopHeader = () => {
  return (
    // dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75
    <>
      <motion.div
        className="max-md:hidden fixed top-6 left-1/2 -translate-x-1/2 rounded-full border border-white border-opacity-40 bg-white bg-opacity-40 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] h-[3.25rem] w-[36rem]"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <nav className="flex fixed left-1/2 -translate-x-1/2">
          <ul className="flex w-[22rem] items-center justify-center gap-5 text-[0.9rem] font-medium text-gray-400">
            {MENU.navigation.map((link) => (
              <li
                key={link.href}
                className="h-3/4 flex items-center justify-center"
              >
                <Link
                  href={link.href}
                  className="hover:text-gray-600 flex w-full items-center justify-center p-3 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </>
  );
};

export default DesktopHeader;
