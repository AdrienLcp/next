import { Device } from '@/utils'

export interface IBreakpoint {
  size: string
  min: number
  max: number
  screen: Device
}
