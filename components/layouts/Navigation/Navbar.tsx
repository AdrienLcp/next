import styles from './NavBarStyles.module.sass'
import { routes } from './routes'

import { usePathname } from 'next/navigation'
import Link from 'next/link'


export const Navbar: React.FC = () => {
  const pathname = usePathname()

  return (
    <nav>
      <ul className={styles.list}>
        {routes.map((route) => (
          <li key={route.pathname}>
            <Link
              href={route.pathname}
              className={`
                ${styles.link}
                ${route.pathname === pathname && styles.active}
              `}
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
