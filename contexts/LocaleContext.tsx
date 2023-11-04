import { createContext, useCallback, useEffect, useState } from 'react'

import type { ILocaleContext, LocaleName, DotNestedKeys } from '@/types'
import { Polyglot } from '@/i18n'
import { LocalStorage } from '@/utils'
import { Locale } from '@/utils'
import { en, fr } from '@/locales'

export const locales = { en, fr }

export const LocaleContext = createContext<ILocaleContext | null>(null)

export const LocaleContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [selectedLocale, setSelectedLocale] = useState<LocaleName>(Locale.FR)

  const isLocale = useCallback((locale: string) => Object.keys(locales).includes(locale), [])

  const changeLocale = useCallback((newLocale: LocaleName) => {
    if (isLocale(newLocale)) {
      setSelectedLocale(newLocale)
      window.localStorage.setItem(LocalStorage.Locale, newLocale)
    }
  }, [setSelectedLocale, isLocale])

  const handleNavigatorLanguageChange = useCallback(() => {
    const navigatorLanguage = window.navigator.language
    const formattedLocale = navigatorLanguage.substring(0, 2)

    if (isLocale(formattedLocale)) {
      setSelectedLocale(formattedLocale as LocaleName)
    }
  }, [setSelectedLocale, isLocale])

  useEffect(() => {
    const favoriteLocale = window.localStorage.getItem(LocalStorage.Locale)

    if (favoriteLocale) {
      changeLocale(favoriteLocale as LocaleName)
    } else {
      handleNavigatorLanguageChange()
    }

    window.addEventListener('languagechange', handleNavigatorLanguageChange)

    return () => {
      window.removeEventListener('languagechange', handleNavigatorLanguageChange)
    }
  }, [changeLocale, handleNavigatorLanguageChange])

  const currentLocale = locales[selectedLocale]
  
  const currentPolyglot = new Polyglot({ phrases: currentLocale as unknown as { [key: string]: string } })

  type I18NStringPaths = DotNestedKeys<typeof currentLocale>

  const getString = (key: I18NStringPaths, options?: { [key: string]: string }) => currentPolyglot.t(key, options)

  return (
    <LocaleContext.Provider value={{ locales, selectedLocale, changeLocale, getString }}>
      {children}
    </LocaleContext.Provider>
  )
}
