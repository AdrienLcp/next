import { useContext } from 'react'
import { ThemeContext } from '@/contexts'

export const useTheme = () => {
  const theme = useContext(ThemeContext)

  if (theme === null) {
    throw new Error('Missing ThemeProvider React node in app definition')
  }

  return theme
}
