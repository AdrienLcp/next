'use client'
import { useEffect, useRef } from 'react'

export const useTimeout = (callback: () => void, delay?: number) => {
  const savedCallback = useRef(callback)
  const timeoutId = useRef<number | null>(null)

  useEffect(() => {
    savedCallback.current = callback

    return () => {
      if (timeoutId.current) {
        window.clearTimeout(timeoutId.current)
      }
    }
  }, [callback])

  const trigger = () => {
    timeoutId.current = window.setTimeout(() => {
      savedCallback.current()
    }, delay || 500)
  }

  return [trigger]
}
