import styles from './ContainerStyles.module.sass'

import { Urbanist } from 'next/font/google'

import { Footer, Header, Status, Toasts } from '@/components'
import { useLocale, useTheme } from '@/hooks'

export const font = Urbanist({ subsets: ['latin'] })

export const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { isDarkModeActive, selectedHue } = useTheme()
  const { selectedLocale } = useLocale()

  return (
    <html lang={selectedLocale}>
      <body className={`
        ${font.className}
        ${isDarkModeActive && 'dark'}
        theme-${selectedHue}
      `}>

        {/* // Flex 1 etc */}

        <Header />

        <Status />
        
        <main className={styles.main}>
          {children}
        </main>

        <Footer />

        <Toasts />

      </body>
    </html>
  )
}
