'use client'

import MenuBar from '@/components/MenuBar'
import './globals.css'
import { Inter } from 'next/font/google'
import ActivityBar from '@/components/ActivityBar'
import SideBar from '@/components/SideBar'
import DraggableVerticalLine from '@/components/DraggableVerticalLine'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Tatpol's Portfolio",
  description: "Tatpol's Portfolio site created by create next app"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex h-screen flex-col items-center justify-between px-48 py-24">
          <div className="flex w-full flex-1 flex-col overflow-hidden rounded-md border">
            <MenuBar />
            <div className="flex flex-1 overflow-hidden">
              <ActivityBar />
              <SideBar />
              <DraggableVerticalLine onDrag={(e) => console.log(e)} />
              <div className="flex-grow">{children}</div>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
