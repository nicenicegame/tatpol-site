import {
  VscFiles,
  VscSearch,
  VscGitMerge,
  VscDebug,
  VscExtensions
} from 'react-icons/vsc'

export default function ActivityBar() {
  return (
    <ul className="flex flex-shrink-0 flex-col border-r">
      <li className="border-l-2 border-l-orange-500 p-4">
        <VscFiles title="Explorer" size="30" />
      </li>
      <li className="p-4">
        <VscSearch title="Search" size="30" />
      </li>
      <li className="p-4">
        <VscGitMerge title="Source Control" size="30" />
      </li>
      <li className="p-4">
        <VscDebug title="Run and Debug" size="30" />
      </li>
      <li className="p-4">
        <VscExtensions title="Extensions" size="30" />
      </li>
    </ul>
  )
}
