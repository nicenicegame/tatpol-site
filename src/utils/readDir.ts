import fs from 'fs'
import path from 'path'

export default function readDir(
  dirPath: string
): { name: string; type: string }[] {
  const files = fs.readdirSync(dirPath)
  const paths = []

  for (const file of files) {
    const filePath = path.join(dirPath, file)
    const stats = fs.statSync(filePath)

    if (stats.isDirectory()) {
      paths.push({ name: file, type: 'dir' })
      const subPaths = readDir(filePath).map((s) => s.name)
      for (const subPath of subPaths) {
        paths.push({ name: `${file}/${subPath}`, type: 'file' })
      }
    } else {
      paths.push({ name: file, type: 'dir' })
    }
  }

  return paths
}
