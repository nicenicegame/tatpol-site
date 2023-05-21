import { PanelGroup, Panel, PanelResizeHandle, Editor } from '@/wrappers'
import BreadCrumb from '@/components/BreadCrumb'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import remarkGfm from 'remark-gfm'
import 'github-markdown-css'

export default async function AboutMe() {
  const response = await fetch('http://localhost:3000/markdown/about/me.md', {
    next: { revalidate: 1 }
  })
  const markdown = await response.text()

  return (
    <PanelGroup direction="horizontal" autoSaveId="main-panel">
      <Panel minSize={30} defaultSize={50} className="flex flex-col">
        <header className="flex items-center bg-slate-900">
          <p className="border-t-2 border-t-orange-500 bg-black p-2 px-4">
            me.md
          </p>
        </header>
        <BreadCrumb />
        <div className="flex-1">
          <Editor
            options={{
              readOnly: true
            }}
            theme="vs-dark"
            defaultLanguage="markdown"
            defaultValue={markdown}
          />
        </div>
      </Panel>
      <PanelResizeHandle className="w-1" />
      <Panel minSize={30} defaultSize={50} className="flex flex-col">
        <header className="flex items-center bg-slate-900">
          <p className="border-t-2 border-t-orange-500 bg-black p-2 px-4">
            Preview me.md
          </p>
        </header>
        <div className="flex flex-1 flex-col overflow-hidden">
          <div className="flex-1 overflow-auto">
            <ReactMarkdown
              className="markdown-body px-16 py-8"
              remarkPlugins={[remarkGfm]}>
              {markdown}
            </ReactMarkdown>
          </div>
        </div>
      </Panel>
    </PanelGroup>
  )
}
