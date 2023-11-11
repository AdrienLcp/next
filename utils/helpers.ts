import type { IApiError } from '@/types'
import { CreateUserError, ServerError } from '@/utils'

export const classNames = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ')
}

export const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message
  } else if (typeof error === 'string') {
    return error
  } else if (error && typeof error === 'object' && 'message' in error) {
    return String(error.message)
  }

  return 'Something went wrong'
}

export const getRandomNumber = (max: number = 100, min: number = 0): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const isApiError = (value: any): value is IApiError => {
  if (value) {
    return Object.values(ServerError).includes(value.message)
        || Object.values(CreateUserError).includes(value.message)
  }
  return false
}

export const sortByOrder = <T>(array: T[], prop: keyof T, type: 'asc' | 'desc' = 'asc'): T[] => {
  return array.sort((a, b) => {
    const valueA = type === 'asc' ? a[prop] : b[prop]
    const valueB = type === 'asc' ? b[prop] : a[prop]

    if (typeof valueA === 'number' && typeof valueB === 'number') {
      return valueA - valueB
    }
    
    return String(valueA).localeCompare(String(valueB))
  })
}
