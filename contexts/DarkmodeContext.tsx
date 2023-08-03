import type { IDarkModeContext } from '@/types'
import { createContext, useCallback, useEffect, useState } from 'react'

export const DarkmodeContext = createContext<IDarkModeContext>({
  isDarkModeActive: false,
  changeDarkMode: (_isNowDarkModeActive: boolean) => {}
})

export const DarkmodeContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isDarkModeActive, setIsDarkModeActive] = useState<boolean>(false)

  const changeDarkMode = (newValue: boolean) => {
    setIsDarkModeActive(newValue)

    window.localStorage.setItem('dark', JSON.stringify(newValue))

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
    const favoriteMode = window.localStorage.getItem('dark')
    const matcher = window.matchMedia('(prefers-color-scheme: dark)')

    if (favoriteMode) {
      changeDarkMode(JSON.parse(favoriteMode))
    } else {
      changeDarkMode(matcher.matches)
      window.localStorage.setItem('dark', JSON.stringify(matcher.matches))
    }

    matcher.addEventListener('change', handleChangeDarkMode)

    return () => {
      matcher.removeEventListener('change', handleChangeDarkMode)
    }
  }, [handleChangeDarkMode])

  return (
    <DarkmodeContext.Provider value={{ isDarkModeActive, changeDarkMode }}>
      {children}
    </DarkmodeContext.Provider>
  )
}
