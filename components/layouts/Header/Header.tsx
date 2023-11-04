import styles from './HeaderStyles.module.sass'

import Link from 'next/link'

import { useLocale } from '@/hooks'
import { Navbar } from '@/components'

export const Header: React.FC = () => {
  const { getString } = useLocale()

  return (
    <header className={styles.header}>
      <Link href='/'>
        <h1 className={styles.title}>
          {getString('appName')}
        </h1>
      </Link>

      <Navbar />
    </header>
  )
}
