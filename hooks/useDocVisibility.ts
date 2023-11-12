'use client'
import { useEffect, useState } from "react"

export const useDocVisibility = () => {
  const [isDocVisible, setIsDocVisible] = useState<boolean>(document.visibilityState === 'visible')

  useEffect(() => {
    const changeDocVisibility = () => setIsDocVisible(document.visibilityState === 'visible')

    document.addEventListener('visibilitychange', changeDocVisibility)

    return () => {
      document.removeEventListener('visibilitychange', changeDocVisibility)
    }
  }, [])

  return isDocVisible
}
