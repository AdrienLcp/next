import { useContext } from 'react'
import {
  LocaleContext,
  ThemeContext,
  ToastsContext
} from '@/contexts'

const useValidContext = <T>(currentContext: React.Context<T>, contextName: string) => {
  const context = useContext(currentContext)

  if (context === null) {
    throw new Error(`Missing ${contextName} context provider React node in app definition`)
  }

  return context
}

export const useLocale = () => useValidContext(LocaleContext, 'Locale')
export const useTheme = () => useValidContext(ThemeContext, 'Theme')
export const useToasts = () => useValidContext(ToastsContext, 'Toasts')
