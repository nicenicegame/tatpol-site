import Level from './Level'
import Folder from './Folder'
import File from './File'

export default function SideBar() {
  // const response = await fetch('http://localhost:3000/api/markdown')
  // const directory = (await response.json()) as {
  //   name: string
  //   type: 'dir' | 'file'
  // }[]
  // console.log(directory)

  // let hierarchy
  // if (directory.length > 0) {
  //   hierarchy = directory.map((item) => {
  //     if (item.type === 'dir') {
  //       return <li key={item.name}>{item.name}</li>
  //     } else {
  //       return <li key={item.name}>{item.name}</li>
  //     }
  //   })
  // }

  return (
    <nav className="flex flex-shrink-0 flex-grow basis-36 select-none flex-col overflow-hidden text-sm">
      <Level>
        <Folder
          label="nicenicegame.github.io"
          labelClassName="uppercase font-semibold"
          iconSize={16}
          hoverable={false}>
          <Level>
            <Folder label="about">
              <Level>
                <File link="/about/me">me.md</File>
              </Level>
            </Folder>
            <Folder label="projects"></Folder>
            <Folder label="experiences"></Folder>
          </Level>
        </Folder>
      </Level>
    </nav>
  )
}
