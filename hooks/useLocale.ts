import { useContext } from 'react'
import { LocaleContext } from '@/contexts'

export const useLocale = () => {
  const locale = useContext(LocaleContext)

  if (locale === null) {
    throw new Error('Missing LocaleProvider React node in app definition')
  }

  return locale
}
