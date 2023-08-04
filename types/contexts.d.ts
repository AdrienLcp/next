import { en, fr } from '@/locales'

// ================================================== //

// =========== //  Dark mode context  // =========== //

export type Hue = 'purple' | 'blue' | 'pink' | 'red' | 'orange'

export interface IThemeContext {
  isDarkModeActive: boolean
  changeDarkMode: (isNowDarkModeActive: boolean) => void
  hue: Hue
  changeHue: (newHue: Hue) => void
}

// ================================================== //

// ============= //  Locale context  // ============= //

const locales = { en, fr }

export type DotPrefix<T extends string> = T extends '' ? '' : `.${T}`

export type DotNestedKeys<T> = (T extends object ?
    { [K in Exclude<keyof T, symbol>]: `${K}${DotPrefix<DotNestedKeys<T[K]>>}` }[Exclude<keyof T, symbol>]
    : '') extends infer D ? Extract<D, string> : never;

type LocaleMap = typeof locales
export type LocaleName = keyof LocaleMap
export type I18NStringPaths = DotNestedKeys<typeof locales['en']>

export interface ILocaleContext {
  locales: typeof locales
  selectedLocale: LocaleName
  changeLocale: (newLocale: LocaleName) => void
  getString: (key: I18NStringPaths, options?: { [key: string]: unknown }) => string
}
