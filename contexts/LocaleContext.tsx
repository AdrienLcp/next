import { createContext, useEffect, useState } from 'react'
import type { ILocaleContext, Locale, PathInto, LocaleName } from '@/types'
import { isLocaleName } from '@/utils'
import { Locales } from '@/utils'
import { en, fr } from '@/locales'

export const locales = { en, fr }

export const LocaleContext = createContext<ILocaleContext | null>(null)

export const LocaleContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [locale, setLocale] = useState<LocaleName>(Locales.FR)

  useEffect(() => {
    const favoriteLocale = window.localStorage.getItem('locale')
    
    if (favoriteLocale && isLocaleName(favoriteLocale)) {
      changeLocale(favoriteLocale)
    }
  }, [])

  const changeLocale = (newLocale: LocaleName) => {
    setLocale(newLocale)
    window.localStorage.setItem('locale', newLocale)
  }

  const get = (object: Record<string, unknown>, path: Array<string>, index = 0): string => {
    const key = path[index]
  
    if (key === undefined) {
      return ''
    }
  
    const value = object[key]
  
    if (value === undefined) {
      return ''
    }
  
    if (typeof value === 'string') {
      return value
    }
  
    return get(Object(value), path, index + 1)
  }
  
  const getText = (currentLocale: LocaleName, key: PathInto<Locale>): string => {
    return get(locales[currentLocale], key.split('.'))
  }

  const getString = (key: PathInto<Locale>) => {
    const string = getText(locale, key)
    return string
  }

  return (
    <LocaleContext.Provider value={{ locale, changeLocale, getString }}>
      {children}
    </LocaleContext.Provider>
  )
}
