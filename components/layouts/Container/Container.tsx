import styles from './ContainerStyles.module.sass'

import { Urbanist } from 'next/font/google'

import { useLocale } from '@/hooks'
import { Footer, Header } from '@/components'

export const font = Urbanist({ subsets: ['latin'] })

export const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { selectedLocale } = useLocale()

  return (
    <html lang={selectedLocale}>
      <body className={font.className}>

        <Header />
        
        <main className={styles.main}>
          {children}
        </main>

        <Footer />

      </body>
    </html>
  )
}
