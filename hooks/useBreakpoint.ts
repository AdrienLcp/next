import { useEffect, useState } from 'react'

import type { IBreakpoint } from '@/types'
import { BREAKPOINTS, getBreakpoint } from '@/utils'

export const useBreakpoint = (customBreakpoints?: IBreakpoint[], mode?: 'extends' | 'replace') => {
  const breakpoints = mode === 'extends' && customBreakpoints
    ? [...BREAKPOINTS, ...customBreakpoints]
    : customBreakpoints ?? BREAKPOINTS

  const [breakpoint, setBreakpoint] = useState<IBreakpoint>(breakpoints[0])

   useEffect(() => {
    const resizeHandler = () => {
      const currentWindowWidth = document.documentElement.clientWidth || window.innerWidth
      const currentBreakpoint = getBreakpoint(currentWindowWidth)

      if (currentBreakpoint) {
        setBreakpoint(currentBreakpoint)
      }
    }

    resizeHandler()
    window.addEventListener('resize', resizeHandler)

    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
   }, [])

  return breakpoint
}
