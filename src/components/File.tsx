'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  link: string
}

export default function File({ children, link }: Props) {
  const pathname = usePathname()
  const isActive = pathname === link

  return (
    <Link href={link} onClick={(e) => e.stopPropagation()}>
      <li
        style={{
          paddingLeft: '100%',
          marginLeft: '-100%'
        }}
        className={`cursor-pointer hover:bg-slate-700 ${
          isActive ? 'bg-slate-700' : ''
        }`}
      >
        {children}
      </li>
    </Link>
  )
}
