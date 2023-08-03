import { locales } from '@/contexts'

// ================================================== //

// =========== //  Dark mode context  // =========== //

export interface IDarkModeContext {
  isDarkModeActive: boolean
  changeDarkMode: (isNowDarkModeActive: boolean) => void
}

// ================================================== //

// ============= //  Locale context  // ============= //

type LocaleMap = typeof locales

export type LocaleName = keyof LocaleMap

export type Locale = LocaleMap[LocaleName]

export type PathInto<T extends Record<string, unknown>> = keyof {
  [K in keyof T as T[K] extends string
    ? K
    : T[K] extends Record<string, unknown>
      ? `${K & string}.${PathInto<T[K]> & string}`
      : never
  ]: unknown
}

export interface ILocaleContext {
  locale: LocaleName
  changeLocale: (newLocale: LocaleName) => void
  getString: (key: PathInto<Locale>) => string
}
