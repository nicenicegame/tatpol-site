'use client'

import { useRef } from 'react'

type Props = {
  onDrag: (value: number) => void
}

export default function DraggableVerticalLine({ onDrag }: Props) {
  const isDraggingRef = useRef(false)
  const lastXRef = useRef(0)

  function onStartDragging(e: React.MouseEvent<HTMLDivElement>) {
    document.body.style.cursor = 'col-resize'
    isDraggingRef.current = true
    lastXRef.current = e.clientX
    window.addEventListener('mousemove', onDragMove)
    window.addEventListener('mouseup', onStopDragging)
  }

  function onStopDragging() {
    document.body.style.cursor = ''
    isDraggingRef.current = false
    window.removeEventListener('mousemove', onDragMove)
    window.addEventListener('mouseup', onStopDragging)
  }

  function onDragMove(e: MouseEvent) {
    if (isDraggingRef.current) {
      onDrag(e.clientX - lastXRef.current)
      lastXRef.current = e.clientX
    }
  }

  return (
    <div
      className="w-1 select-none bg-slate-700 hover:cursor-col-resize"
      onMouseDown={onStartDragging}
    />
  )
}
