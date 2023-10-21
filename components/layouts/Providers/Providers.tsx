import {
  LocaleContextProvider,
  ThemeContextProvider,
  ToastsContextProvider
} from '@/contexts'

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => (
  <LocaleContextProvider>
    <ThemeContextProvider>
      <ToastsContextProvider>
        {children}
      </ToastsContextProvider>
    </ThemeContextProvider>
  </LocaleContextProvider>
)
