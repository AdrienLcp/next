'use client'
import { createContext, useCallback, useEffect, useState } from 'react'

import type { IThemeContext, Hue, Theme } from '@/types'
import { HUES, THEMES, getLocalStorageItem, setLocalStorageItem } from '@/utils'

export const ThemeContext = createContext<IThemeContext | null>(null)

export const ThemeContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isDarkModeActive, setIsDarkModeActive] = useState<boolean>(false)
  const [selectedTheme, setSelectedTheme] = useState<Theme>('system')
  const [selectedHue, setSelectedHue] = useState<Hue>('neutral')

  const changeHue = useCallback((newHue: Hue) => {
    if (HUES.includes(newHue)) {
      setSelectedHue(newHue)
      setLocalStorageItem('hue', newHue)
    }
  }, [])

  const changeTheme = useCallback((newTheme: Theme) => {
    if (THEMES.includes(newTheme)) {
      setSelectedTheme(newTheme)
      setLocalStorageItem('theme', newTheme)

      switch (newTheme) {
        case 'dark':
          setIsDarkModeActive(true)
          break
        case 'light':
          setIsDarkModeActive(false)
          break
        case 'system':
        default:
          const matcher = window.matchMedia('(prefers-color-scheme: dark)')
          setIsDarkModeActive(matcher.matches)
          break
      }
    }
  }, [])

  useEffect(() => {
    const favoriteTheme = getLocalStorageItem<Theme>('theme')
    const favoriteHue = getLocalStorageItem<Hue>('hue')

    if (favoriteTheme) {
      changeTheme(favoriteTheme)
    }

    if (favoriteHue) {
      changeHue(favoriteHue)
    }
  }, [changeTheme, changeHue])

  useEffect(() => {
    const matcher = window.matchMedia('(prefers-color-scheme: dark)')

    const handlePrefersColorSchemeChange = (event: MediaQueryListEvent) => {
      if (selectedTheme === 'system') {
        setIsDarkModeActive(event.matches)
      }
    }

    if (selectedTheme === 'system') {
      setIsDarkModeActive(matcher.matches)
      matcher.addEventListener('change', handlePrefersColorSchemeChange)
    } else {
      matcher.removeEventListener('change', handlePrefersColorSchemeChange)
    }

    return () => {
      matcher.removeEventListener('change', handlePrefersColorSchemeChange)
    }
  }, [selectedTheme])

  return (
    <ThemeContext.Provider
      value={{
        isDarkModeActive,
        selectedTheme,
        selectedHue,
        changeTheme,
        changeHue
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
