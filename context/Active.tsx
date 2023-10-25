'use client'
import { useState, createContext } from 'react'
import type { ActiveContextProviderProps, ActiveSectionProps, ActiveSectionContextProps } from '@/lib/types'

export const ActiveSectionContext = createContext<ActiveSectionContextProps | null>(null)

const ActiveContextProvider = ({ children }: ActiveContextProviderProps) => {
  const [activeSection, setActiveSection] = useState<ActiveSectionProps>('Home')

  // State varible storing number of seconds since link of nav bar was last clicked to avoid highlighted animation running over every section if skipping between different parts of page (doing this because of the observer API)
  const [timeOfLastClick, setTimeOfLastClick] = useState(0)

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  )
}

export default ActiveContextProvider