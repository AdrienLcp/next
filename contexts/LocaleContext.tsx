import { createContext, useEffect, useState } from 'react'

import type { ILocaleContext, LocaleName, DotNestedKeys } from '@/types'
import { Polyglot } from '@/i18n'
import { LocalStorage, isLocaleName } from '@/utils'
import { Locales } from '@/utils'
import { en, fr } from '@/locales'

export const locales = { en, fr }

export const LocaleContext = createContext<ILocaleContext | null>(null)

export const LocaleContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [selectedLocale, setSelectedLocale] = useState<LocaleName>(Locales.FR)

  useEffect(() => {
    const favoriteLocale = window.localStorage.getItem(LocalStorage.Locale)
    
    if (favoriteLocale && isLocaleName(favoriteLocale)) {
      changeLocale(favoriteLocale)
    }
  }, [])

  const changeLocale = (newLocale: LocaleName) => {
    setSelectedLocale(newLocale)
    window.localStorage.setItem(LocalStorage.Locale, newLocale)
  }

  const currentLocale = locales[selectedLocale]
  
  const currentPolyglot = new Polyglot({ phrases: currentLocale as any as { [key: string]: string } })

  type I18NStringPaths = DotNestedKeys<typeof currentLocale>

  const getString = (key: I18NStringPaths, options?: { [key: string]: any }) => currentPolyglot.t(key, options)

  return (
    <LocaleContext.Provider value={{ locales, selectedLocale, changeLocale, getString }}>
      {children}
    </LocaleContext.Provider>
  )
}
