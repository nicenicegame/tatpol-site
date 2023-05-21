import MenuBar from '@/components/MenuBar'
import './globals.css'
import { Inter } from 'next/font/google'
import ActivityBar from '@/components/ActivityBar'
import SideBar from '@/components/SideBar'
import { PanelGroup, Panel, PanelResizeHandle } from '@/wrappers'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Tatpol's Portfolio",
  description: "Tatpol's Portfolio site created by create next app"
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex h-screen flex-col items-center justify-between lg:px-24 lg:py-12">
          <div className="flex w-full flex-1 flex-col overflow-hidden rounded-md border">
            <MenuBar />
            <div className="flex flex-1">
              <ActivityBar />
              <PanelGroup direction="horizontal">
                <Panel defaultSize={20}>
                  <SideBar />
                </Panel>
                <PanelResizeHandle />
                <Panel defaultSize={80}>{children}</Panel>
              </PanelGroup>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
