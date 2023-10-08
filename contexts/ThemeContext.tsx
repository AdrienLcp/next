import { createContext, useCallback, useEffect, useState } from 'react'

import type { IThemeContext } from '@/types'
import { Hue, LocalStorage, Theme } from '@/utils'

const matcher = window.matchMedia('(prefers-color-scheme: dark)')

export const ThemeContext = createContext<IThemeContext | null>(null)

export const ThemeContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isDarkModeActive, setIsDarkModeActive] = useState<boolean>(false)
  const [selectedTheme, setSelectedTheme] = useState<Theme>(Theme.System)
  const [selectedHue, setSelectedHue] = useState<Hue>(Hue.Neutral)

  const isHue = (hue: Hue) => Object.values(Hue).includes(hue)
  const isTheme = (theme: Theme) => Object.values(Theme).includes(theme)

  const changeHue = useCallback((newHue: Hue) => {
    if (isHue(newHue)) {
      setSelectedHue(newHue)
      window.localStorage.setItem(LocalStorage.Hue, newHue)
    }
  }, [])

  const changeTheme = useCallback((newTheme: Theme) => {
    if (!isTheme(newTheme)) {
      return
    }

    setSelectedTheme(newTheme)
    window.localStorage.setItem(LocalStorage.Theme, JSON.stringify(newTheme))

    switch (newTheme) {
      case Theme.Dark:
        setIsDarkModeActive(true)
        break
      case Theme.Light:
        setIsDarkModeActive(false)
        break
      case Theme.System:
      default:
        setIsDarkModeActive(matcher.matches)
        break
    }
  }, [])

  useEffect(() => {
    const favoriteThemeFromLocalStorage = window.localStorage.getItem(LocalStorage.Theme)
    const favoriteHueFromLocalStorage = window.localStorage.getItem(LocalStorage.Hue)

    if (favoriteThemeFromLocalStorage) {
      const favoriteTheme = JSON.parse(favoriteThemeFromLocalStorage) as Theme
      changeTheme(favoriteTheme)
    }

    if (favoriteHueFromLocalStorage) {
      const favoriteHue = JSON.parse(favoriteHueFromLocalStorage) as Hue
      changeHue(favoriteHue)
    }
  }, [changeHue, changeTheme])

  useEffect(() => {
    const handlePrefersColorSchemeChange = (event: MediaQueryListEvent) => {
      if (selectedTheme === Theme.System) {
        setIsDarkModeActive(event.matches)
      }
    }

    if (selectedTheme === Theme.System) {
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
