import { useEffect, useRef, useState } from 'react'

export const useGetSectionOffsetTop = () => {
  const [offsetTop, setOffsetTop] = useState()
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      setOffsetTop(ref.current.offsetTop)
    }
  }, [ref.current])

  return [ref, offsetTop]
}
