import { LOCAL_STORAGE_KEYS } from '@/utils'

type LocalStorageKey = typeof LOCAL_STORAGE_KEYS[number]

export const useLocalStorage = () => {
  const getLocalStorageItem = <T>(key: LocalStorageKey): T | undefined => {
    const value = window.localStorage.getItem(key)
    return parseJSON<T>(value, key)
  }

  const setLocalStorageItem = (key: LocalStorageKey, value: unknown) => {
    if (LOCAL_STORAGE_KEYS.includes(key)) {
      window.localStorage.setItem(key, JSON.stringify(value))
    }
  }

  const removeLocalStorageItem = (key: LocalStorageKey) => {
    window.localStorage.removeItem(key)
  }

  const clearLocalStorage = () => window.localStorage.clear()

  return {
    getLocalStorageItem,
    setLocalStorageItem,
    removeLocalStorageItem,
    clearLocalStorage
  }
}

const parseJSON = <T>(value: string | null, key: string): T | undefined => {
  try {
    return value === 'undefined' ? undefined : JSON.parse(value ?? '')
  } catch {
    console.warn(`Parsing error for key "${key}"`, { value })
    return undefined
  }
}
