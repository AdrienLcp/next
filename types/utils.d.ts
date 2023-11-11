import { DEVICES } from '@/utils'

export interface IBreakpoint {
  size: string
  min: number
  max: number
  screen: typeof DEVICES[number]
}
