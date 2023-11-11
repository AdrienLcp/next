import { createContext, useCallback, useEffect, useState } from 'react'

import type { ILocaleContext, LocaleName, DotNestedKeys } from '@/types'
import { useLocalStorage } from '@/hooks'
import { en, fr } from '@/locales'
import { Polyglot } from '@/i18n'

export const locales = { en, fr }

export const LocaleContext = createContext<ILocaleContext | null>(null)

export const LocaleContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [selectedLocale, setSelectedLocale] = useState<LocaleName>('fr')
  const { getLocalStorageItem, setLocalStorageItem } = useLocalStorage()

  const isLocale = useCallback((locale: string) => Object.keys(locales).includes(locale), [])

  const changeLocale = useCallback((newLocale: LocaleName) => {
    if (isLocale(newLocale)) {
      setSelectedLocale(newLocale)
      setLocalStorageItem('locale', newLocale)
    }
  }, [isLocale, setLocalStorageItem])

  const handleNavigatorLanguageChange = useCallback(() => {
    const navigatorLanguage = window.navigator.language
    const formattedLocale = navigatorLanguage.substring(0, 2)

    if (isLocale(formattedLocale)) {
      setSelectedLocale(formattedLocale as LocaleName)
    }
  }, [setSelectedLocale, isLocale])

  useEffect(() => {
    const favoriteLocale = getLocalStorageItem<LocaleName>('locale')

    if (favoriteLocale) {
      changeLocale(favoriteLocale)
    } else {
      handleNavigatorLanguageChange()
    }

    window.addEventListener('languagechange', handleNavigatorLanguageChange)

    return () => {
      window.removeEventListener('languagechange', handleNavigatorLanguageChange)
    }
  }, [changeLocale, getLocalStorageItem, handleNavigatorLanguageChange])

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
