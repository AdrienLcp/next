import { ErrorBoundary, Footer, Header, Toasts } from '@/components'
import { bodyFont, classNames, headingFont } from '@/utils'
import { useLocale, useTheme } from '@/hooks'

import styles from './ContainerStyles.module.sass'

export const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { isDarkModeActive, selectedHue } = useTheme()
  const { selectedLocale } = useLocale()

  return (
    <html
      lang={selectedLocale}
      style={{ colorScheme: isDarkModeActive ? 'dark' : 'light' }}
      suppressHydrationWarning
    >
      <body className={classNames(
        headingFont.variable,
        bodyFont.variable,
        `theme-${selectedHue}`,
        isDarkModeActive ? 'dark' : null
      )}>
        <ErrorBoundary>

          {/* // Flex 1 etc */}

          <Header />
          
          <main className={styles.main}>
            {children}
          </main>

          <Footer />

          <Toasts />

        </ErrorBoundary>
      </body>
    </html>
  )
}
