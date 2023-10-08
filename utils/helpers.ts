import type { IApiError } from '@/types'
import { CreateUserError, ServerError } from '@/utils'

export const isApiError = (value: any): value is IApiError => {
  if (value) {
    return Object.values(ServerError).includes(value.message)
        || Object.values(CreateUserError).includes(value.message)
  }
  return false
}

export const sortByAlphabeticalOrder = <T>(array: T[], prop: keyof T): T[] => {
  return array.sort((a, b) => String(a[prop]).localeCompare(String(b[prop])))
}

export const getRandomNumber = (max: number = 100, min: number = 0) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
