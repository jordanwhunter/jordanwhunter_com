"use client";
import {useActiveSection} from "@/lib/hooks";
import {motion} from "framer-motion";
import {MENU} from "@/lib/constants";
import Link from "next/link";
import cn from "classnames";

const DesktopHeader = () => {
  const {activeSection, setActiveSection, setTimeOfLastClick} =
    useActiveSection();

  return (
    // dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75
    <motion.div
      className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 rounded-full border border-white border-opacity-40 bg-white bg-opacity-40 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] h-[3.25rem] w-[36rem]"
      initial={{y: -100, x: "-50%", opacity: 0}}
      animate={{y: 0, x: "-50%", opacity: 1}}
    >
      <nav className="fixed left-1/2 -translate-x-1/2">
        <ul className="flex w-[22rem] items-center justify-center gap-5 text-[0.9rem] mt-[0.2rem] font-medium text-gray-400">
          {MENU.navigation.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "hover:text-gray-600 flex w-full justify-center p-3 transition",
                  activeSection === link.name &&
                    "text-gray-600 bg-gray-50 rounded-full py-1",
                )}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};

export default DesktopHeader;
