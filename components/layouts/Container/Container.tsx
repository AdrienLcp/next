import { Inter } from 'next/font/google'
import { useLocale } from '@/hooks'

const inter = Inter({ subsets: ['latin'] })

const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { selectedLocale } = useLocale()

  return (
    <html lang={selectedLocale}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

export default Container
