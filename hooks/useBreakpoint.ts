'use client'
import { useEffect, useState } from 'react'
import { BREAKPOINTS } from '@/utils'

type Breakpoint = typeof BREAKPOINTS[number]

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(BREAKPOINTS[0])

  useEffect(() => {
    const resizeHandler = () => {
      const width = window.innerWidth

      if (width < breakpoint.min || (breakpoint.max && width > breakpoint.max)) {
        const currentBreakpoint = BREAKPOINTS.find(bp => width >= bp.min && (bp.max === undefined || width <= bp.max))

        if (currentBreakpoint) {
          setBreakpoint(currentBreakpoint)
        }
      }
    }
    
    resizeHandler()

    window.addEventListener('resize', resizeHandler)

    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [breakpoint])

  return { breakpoint }
}
