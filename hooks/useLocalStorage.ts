import { SetStateAction, useCallback, useState } from 'react'

export const useLocalStorage = <T>(key: string, initialValue: T): [T, React.Dispatch<SetStateAction<T>>] => {
  const readValue = useCallback((): T => {
    if (typeof window === 'undefined') {
      return initialValue
    }

    try {
      const item = window.localStorage.getItem(key)
      return item ? (parseJSON(item) as T) : initialValue
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error)
      return initialValue
    }
  }, [initialValue, key])
  
  const [storedValue, setStoredValue] = useState<T>(readValue)

  const setValue: React.Dispatch<React.SetStateAction<T>> = (value: React.SetStateAction<T>) => {
    if (typeof window === 'undefined') {
      console.warn(`Tried setting localStorage key “${key}” even though environment is not a client`)
    }

    try {
      const newValue = value instanceof Function ? value(storedValue) : value
      window.localStorage.setItem(key, JSON.stringify(newValue))
      setStoredValue(newValue)
    } catch (error) {
      console.warn(`Error setting localStorage key “${key}”:`, error)
    }
  }

  return [storedValue, setValue]
}

const parseJSON = <T>(value: string | null): T | undefined => {
  try {
    return value === 'undefined' ? undefined : JSON.parse(value ?? '')
  } catch {
    console.warn('parsing error on', { value })
    return undefined
  }
}
