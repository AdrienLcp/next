import { Hue, type IThemeContext } from '@/types'
import { LocalStorage } from '@/utils'
import { createContext, useCallback, useEffect, useState } from 'react'

export const ThemeContext = createContext<IThemeContext | null>(null)

export const ThemeContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isDarkModeActive, setIsDarkModeActive] = useState<boolean>(false)
  const [hue, setHue] = useState<Hue>('purple')

  const getFavoriteHue = () => {
    const favoriteHueFromLocalStorage = window.localStorage.getItem(LocalStorage.Hue)

    if (favoriteHueFromLocalStorage) {
      setHue(JSON.parse(favoriteHueFromLocalStorage))
    }
  }

  const changeHue = (newHue: Hue) => {
    setHue(newHue)
    window.localStorage.setItem(LocalStorage.Hue, newHue)
  }

  const changeDarkMode = (newValue: boolean) => {
    setIsDarkModeActive(newValue)

    window.localStorage.setItem(LocalStorage.DarkMode, JSON.stringify(newValue))

    if (newValue) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }

  const handleChangeDarkMode = useCallback((event: MediaQueryListEvent) => {
    changeDarkMode(event.matches)
  }, [])

  useEffect(() => {
    getFavoriteHue()
    
    const favoriteMode = window.localStorage.getItem(LocalStorage.DarkMode)
    const matcher = window.matchMedia('(prefers-color-scheme: dark)')

    if (favoriteMode) {
      changeDarkMode(JSON.parse(favoriteMode))
    } else {
      changeDarkMode(matcher.matches)
      window.localStorage.setItem(LocalStorage.DarkMode, JSON.stringify(matcher.matches))
    }

    matcher.addEventListener('change', handleChangeDarkMode)

    return () => {
      matcher.removeEventListener('change', handleChangeDarkMode)
    }
  }, [handleChangeDarkMode])

  return (
    <ThemeContext.Provider
      value={{
        isDarkModeActive,
        changeDarkMode,
        hue,
        changeHue
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
