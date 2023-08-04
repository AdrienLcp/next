import type { IApiError, LocaleName } from '@/types'
import { Locales, CreateUserError, ServerError } from '@/utils'

export const isLocaleName = (value: any): value is LocaleName => {
  if (value && typeof value === 'string') {
    return value === Locales.EN
        || value === Locales.FR
  }
  return false
}

export const isApiError = (value: any): value is IApiError => {
  if (value) {
    return Object.values(ServerError).includes(value.message)
        || Object.values(CreateUserError).includes(value.message)
  }
  return false
}
