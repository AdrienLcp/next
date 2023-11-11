import type { IBreakpoint } from '@/types'

// This objet needs to match CSS breakpoints in globals.sass file
export const BREAKPOINTS: IBreakpoint[] = [
  {
    size: 'xs',
    min: 0,
    max: 480,
    screen: 'mobile'
  },
  {
    size: 's',
    min: 481,
    max: 767,
    screen: 'small'
  },
  {
    size: 'md',
    min: 768,
    max: 991,
    screen: 'tablet'
  },
  {
    size: 'lg',
    min: 992,
    max: 1199,
    screen: 'laptop'
  },
  {
    size: 'xl',
    min: 1200,
    max: 1919,
    screen: 'desktop'
  },
  {
    size: 'xxl',
    min: 1920,
    max: 100_000_000,
    screen: 'large'
  }
]

export const getBreakpoint = (windowWidth: number) => {
  return BREAKPOINTS.find(bp => bp.min >= windowWidth && bp.max <= windowWidth)
}
