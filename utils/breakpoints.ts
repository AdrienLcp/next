import type { IBreakpoint } from '@/types'
import { Device } from './enums'

// This objet needs to match CSS breakpoints in globals.sass file
export const BREAKPOINTS: IBreakpoint[] = [
  {
    size: 'xs',
    min: 0,
    max: 480,
    screen: Device.Mobile
  },
  {
    size: 's',
    min: 481,
    max: 767,
    screen: Device.SmallDevice
  },
  {
    size: 'md',
    min: 768,
    max: 991,
    screen: Device.Tablet
  },
  {
    size: 'lg',
    min: 992,
    max: 1199,
    screen: Device.Laptop
  },
  {
    size: 'xl',
    min: 1200,
    max: 1919,
    screen: Device.Desktop
  },
  {
    size: 'xxl',
    min: 1920,
    max: 100_000_000,
    screen: Device.Large
  }
]

export const getBreakpoint = (windowWidth: number) => {
  return BREAKPOINTS.find(bp => bp.min >= windowWidth && bp.max <= windowWidth)
}
