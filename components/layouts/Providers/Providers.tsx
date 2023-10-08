import {
  LocaleContextProvider,
  StatusContextProvider,
  ThemeContextProvider,
  ToastsContextProvider
} from '@/contexts'

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => (
  <LocaleContextProvider>
    <ThemeContextProvider>
      <StatusContextProvider>
        <ToastsContextProvider>
          {children}
        </ToastsContextProvider>
      </StatusContextProvider>
    </ThemeContextProvider>
  </LocaleContextProvider>
)
