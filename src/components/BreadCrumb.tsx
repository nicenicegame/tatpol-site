'use client'

import { usePathname } from 'next/navigation'
import { VscChevronRight } from 'react-icons/vsc'

export default function BreadCrumb() {
  const pathname = usePathname()
  const paths = pathname.split('/').slice(1)

  return (
    <div className="flex gap-1 p-1 px-4">
      {paths.map((path, index) => (
        <div className="flex items-center gap-1" key={path}>
          <span>{path}</span>
          {index !== paths.length - 1 && <VscChevronRight />}
        </div>
      ))}
    </div>
  )
}
