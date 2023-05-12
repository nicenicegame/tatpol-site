import readDir from '@/utils/readDir'
import { NextResponse } from 'next/server'
import path from 'path'

export function GET() {
  const directoryPath = path.join(process.cwd(), '/public/markdown')
  const markdownDirectory = readDir(directoryPath)
  return NextResponse.json(markdownDirectory)
}
