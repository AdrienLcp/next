import { createContext, useCallback, useEffect, useState } from 'react'

import type { IThemeContext } from '@/types'
import { Hue, LocalStorage, Theme } from '@/utils'

export const ThemeContext = createContext<IThemeContext | null>(null)

export const ThemeContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isDarkModeActive, setIsDarkModeActive] = useState<boolean>(false)
  const [selectedTheme, setSelectedTheme] = useState<Theme>(Theme.System)
  const [selectedHue, setSelectedHue] = useState<Hue>(Hue.Neutral)

  const changeHue = useCallback((newHue: Hue) => {
    if (Object.values(Hue).includes(newHue)) {
      setSelectedHue(newHue)
      window.localStorage.setItem(LocalStorage.Hue, newHue)
    }
  }, [setSelectedHue])

  const changeTheme = useCallback((newTheme: Theme) => {
    if (Object.values(Theme).includes(newTheme)) {
      setSelectedTheme(newTheme)
      window.localStorage.setItem(LocalStorage.Theme, newTheme)

      switch (newTheme) {
        case Theme.Dark:
          setIsDarkModeActive(true)
          break
        case Theme.Light:
          setIsDarkModeActive(false)
          break
        case Theme.System:
        default:
          const matcher = window.matchMedia('(prefers-color-scheme: dark)')
          setIsDarkModeActive(matcher.matches)
          break
      }
    }
  }, [setSelectedTheme, setIsDarkModeActive])

  useEffect(() => {
    const favoriteTheme = window.localStorage.getItem(LocalStorage.Theme)
    const favoriteHue = window.localStorage.getItem(LocalStorage.Hue)

    if (favoriteTheme) {
      changeTheme(favoriteTheme as Theme)
    }

    if (favoriteHue) {
      changeHue(favoriteHue as Hue)
    }
  }, [changeTheme, changeHue])

  useEffect(() => {
    const matcher = window.matchMedia('(prefers-color-scheme: dark)')

    const handlePrefersColorSchemeChange = (event: MediaQueryListEvent) => {
      if (selectedTheme === Theme.System) {
        setIsDarkModeActive(event.matches)
      }
    }

    if (selectedTheme === Theme.System) {
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
