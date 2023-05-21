import { PanelGroup, Panel, PanelResizeHandle, Editor } from '@/wrappers'
import BreadCrumb from '@/components/BreadCrumb'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import remarkGfm from 'remark-gfm'
import 'github-markdown-css'

export default async function AboutMe() {
  const response = await fetch('http://localhost:3000/markdown/about/me.md')
  const markdown = await response.text()

  return (
    <PanelGroup direction="horizontal" autoSaveId="main-panel">
      <Panel minSize={20} defaultSize={50}>
        <header className="flex items-center bg-slate-900">
          <p className="border-t-2 border-t-orange-500 bg-black p-2 px-4">
            me.md
          </p>
        </header>
        <BreadCrumb />
        <Editor
          theme="vs-dark"
          defaultLanguage="markdown"
          defaultValue={markdown}
        />
      </Panel>
      <PanelResizeHandle />
      <Panel minSize={20} defaultSize={50}>
        <header className="flex items-center bg-slate-900">
          <p className="border-t-2 border-t-orange-500 bg-black p-2 px-4">
            Preview me.md
          </p>
        </header>
        <ReactMarkdown
          className="markdown-body flex-1 list-inside overflow-auto p-16"
          remarkPlugins={[remarkGfm]}>
          {markdown}
        </ReactMarkdown>
      </Panel>
    </PanelGroup>
  )
}
