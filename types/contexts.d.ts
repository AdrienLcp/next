import { en, fr } from '@/locales'
import { HUES, THEMES } from '@/utils'

// ================================================== //

// ============= //  Locale context  // ============= //

const locales = { en, fr }

export type DotPrefix<T extends string> = T extends '' ? '' : `.${T}`

export type DotNestedKeys<T> = (T extends object ?
    { [K in Exclude<keyof T, symbol>]: `${K}${DotPrefix<DotNestedKeys<T[K]>>}` }[Exclude<keyof T, symbol>]
    : '') extends infer D ? Extract<D, string> : never;

type LocaleMap = typeof locales
export type LocaleName = keyof LocaleMap
export type I18NStringPaths = DotNestedKeys<typeof en>

export interface ILocaleContext {
  locales: typeof locales
  selectedLocale: LocaleName
  changeLocale: (newLocale: LocaleName) => void
  getString: (key: I18NStringPaths, options?: { [key: string]: string }) => string
}

// ================================================== //

// ============= //  Toasts context  // ============= //

type ToastType = 'default' | 'error' | 'warning' | 'success'

export interface IToast {
  type?: ToastType
  title?: string
  content: string
  duration?: number
  icon?: JSX.Element
}

export interface IToastBuilt extends IToast {
  type: ToastType
  id: string
}

export type PushToast = (toast: IToast) => void

export interface IToastsContext {
  toasts: IToastBuilt[]
  pushToast: PushToast
  deleteToast: (toastId: string) => void
}

// ================================================== //

// =========== //  Theme context  // =========== //

export type Hue = typeof HUES[number]
export type Theme = typeof THEMES[number]

export interface IThemeContext {
  isDarkModeActive: boolean
  selectedHue: Hue
  selectedTheme: Theme
  changeHue: (newHue: Hue) => void
  changeTheme: (newTheme: Theme) => void
}
