'use client'
import { useEffect, useRef } from 'react'

export const useInterval = (callback: () => void, delay?: number) => {
  const savedCallback = useRef(callback)
  const intervalId = useRef<number | null>(null)

  useEffect(() => {
    savedCallback.current = callback

    return () => {
      if (intervalId.current) {
        window.clearInterval(intervalId.current)
      }
    }
  }, [callback])

  const trigger = () => {
    intervalId.current = window.setInterval(() => {
      savedCallback.current()
    }, delay || 500)
  }

  return [trigger]
}
