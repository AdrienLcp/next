import { Inter } from 'next/font/google'
import { useLocale } from '@/hooks'

const inter = Inter({ subsets: ['latin'] })

const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { locale } = useLocale()

  return (
    <html lang={locale}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

export default Container
