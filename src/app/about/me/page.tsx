'use client'

import BreadCrumb from '@/components/BreadCrumb'
import Editor from '@monaco-editor/react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import remarkGfm from 'remark-gfm'
import 'github-markdown-css'
import DraggableVerticalLine from '@/components/DraggableVerticalLine'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

export default function AboutMe() {
  // const response = await fetch('http://localhost:3000/markdown/about/me.md')
  // const markdown = await response.text()
  const [editorPanelWidth, setEditorPanelWidth] = useState(0)
  const editorRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    console.log(editorRef?.current?.clientWidth)
    if (editorRef.current) setEditorPanelWidth(editorRef?.current?.clientWidth)
  }, [])

  function onResizePanel(value: number) {
    setEditorPanelWidth((width) => width + value)
  }

  return (
    <div className="flex h-full">
      <div className="flex w-40 flex-auto flex-col">
        <header className="flex items-center bg-slate-900">
          <p className="border-t-2 border-t-orange-500 bg-black p-2 px-4">
            me.md
          </p>
        </header>
        <BreadCrumb />
        <div
          className="w-full flex-1"
          style={{ width: editorPanelWidth }}
          ref={editorRef}
        >
          {/* <Editor
            theme="vs-dark"
            defaultLanguage="markdown"
            defaultValue={markdown}
          /> */}
        </div>
      </div>
      <DraggableVerticalLine onDrag={onResizePanel} />
      <div className="flex h-full w-40 flex-auto flex-col overflow-hidden">
        <header className="flex items-center bg-slate-900">
          <p className="border-t-2 border-t-orange-500 bg-black p-2 px-4">
            Preview me.md
          </p>
        </header>
        <div className="markdown-body h-full w-full flex-1 overflow-auto px-20 py-6">
          {/* <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown> */}
        </div>
      </div>
    </div>
  )
}
