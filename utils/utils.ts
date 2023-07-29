import type { LocaleName } from '@/types'
import { Locales } from './enums'

export const isLocaleName = (value: any): value is LocaleName => {
  if (value && typeof value === 'string') {
    return value === Locales.EN || value === Locales.FR
  }
  return false
}
