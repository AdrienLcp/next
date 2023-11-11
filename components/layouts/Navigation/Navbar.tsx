import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './NavBarStyles.module.sass'
import { routes } from './routes'
import { classNames } from '@/utils'


export const Navbar: React.FC = () => {
  const pathname = usePathname()

  return (
    <nav>
      <ul className={styles.list}>
        {routes.map((route) => (
          <li key={route.pathname}>
            <Link
              href={route.pathname}
              className={classNames(
                styles.link,
                route.pathname === pathname ? styles.active : null
              )}
            >
              {route.icon}
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
