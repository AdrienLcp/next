import Link from 'next/link'
import styles from './NavBarStyles.module.sass'
import routes from './Routes'

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul className={styles.list}>
        {routes.map((route) => (
          <li key={route.pathname}>
            <Link
              href={route.pathname}
              className={`${styles.link} ${
                route.pathname === window.location.pathname && styles.active
              }`}
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

export default NavBar
