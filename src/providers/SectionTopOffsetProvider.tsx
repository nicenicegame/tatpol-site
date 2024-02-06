import React, {
  createContext,
  useState,
  ReactNode,
  useMemo,
  Dispatch,
  SetStateAction
} from 'react'
import { useContext } from 'react'

interface SectionTopOffset {
  experience: number
  projects: number
  contact: number
}

const DEFAULT_SECTION_TOP_OFFSET = {
  experience: 0,
  projects: 0,
  contact: 0
}

const SectionTopOffsetContext = createContext<
  [SectionTopOffset, Dispatch<SetStateAction<SectionTopOffset>>]
>([DEFAULT_SECTION_TOP_OFFSET, () => {}])

const SectionTopOffsetProvider = ({ children }: { children: ReactNode }) => {
  const [sectionOffsetTop, setSectionOffsetTop] = useState({
    experience: 0,
    projects: 0,
    contact: 0
  })

  const value: [SectionTopOffset, Dispatch<SetStateAction<SectionTopOffset>>] =
    useMemo(() => [sectionOffsetTop, setSectionOffsetTop], [sectionOffsetTop])

  return (
    <SectionTopOffsetContext.Provider value={value}>
      {children}
    </SectionTopOffsetContext.Provider>
  )
}

export const useSectionTopOffset = () => useContext(SectionTopOffsetContext)

export default SectionTopOffsetProvider
