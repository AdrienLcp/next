export const classNames = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ')
}

export const copyToClipboard = async (text: string) => {
  if (!navigator?.clipboard) {
    console.warn('Clipboard not supported')
    return false
  }

  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (error) {
    console.warn(`Failed to copy "${text}"`, error)
    return false
  }
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

export const parseJSON = <T>(value: string | null, key: string): T | undefined => {
  try {
    return value === 'undefined' ? undefined : JSON.parse(value ?? '')
  } catch {
    console.warn(`Parsing error for key "${key}"`, { value })
    return undefined
  }
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
