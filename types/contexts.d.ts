import { en, fr } from '@/locales'
import { Hue, Theme } from '@/utils'

// ================================================== //

// =========== //  Theme context  // =========== //

export interface IThemeContext {
  isDarkModeActive: boolean
  selectedHue: Hue
  selectedTheme: Theme
  changeHue: (newHue: Hue) => void
  changeTheme: (newTheme: Theme) => void
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
export type I18NStringPaths = DotNestedKeys<typeof en>

export interface ILocaleContext {
  locales: typeof locales
  selectedLocale: LocaleName
  changeLocale: (newLocale: LocaleName) => void
  getString: (key: I18NStringPaths, options?: { [key: string]: unknown }) => string
}

// ================================================== //

// ============= //  Status context  // ============= //


type StatusType = 'default' | 'error' | 'warning' | 'success'

export interface IStatus {
  type: StatusType
  title?: string
  text: string
}

export interface IStatusContext {
  status: IStatus | null
  setStatus: React.Dispatch<React.SetStateAction<IStatus | null>>
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

export interface IToastsContext {
  toasts: IToastBuilt[]
  pushToast: (newToast: IToast) => void
  deleteToast: (toastId: string) => void
}

export type PushToast = (toast: IToast) => void
