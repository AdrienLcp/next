import { Footer, Header, Toasts } from '@/components'
import { bodyFont, headingFont } from '@/utils'
import { useLocale, useTheme } from '@/hooks'

import styles from './ContainerStyles.module.sass'

export const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { isDarkModeActive, selectedHue } = useTheme()
  const { selectedLocale } = useLocale()

  return (
    <html lang={selectedLocale}>
      <body className={`
        ${headingFont.variable}
        ${bodyFont.variable}
        ${isDarkModeActive && 'dark'}
        theme-${selectedHue}
      `}>

        {/* // Flex 1 etc */}

        <Header />
        
        <main className={styles.main}>
          {children}
        </main>

        <Footer />

        <Toasts />

      </body>
    </html>
  )
}
