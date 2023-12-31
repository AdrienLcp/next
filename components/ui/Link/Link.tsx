import type { ILinkProps } from './LinkTypes'
import styles from './LinkStyles.module.sass'

import { default as NextLink } from 'next/link'
import { classNames } from '@/utils'

const Link: React.FC<ILinkProps> = ({
  href = '',
  className = '',
  children
}) => {
  return (
    <NextLink
      href={href}
      className={classNames(styles.link, className)}
    >
      {children}
    </NextLink>
  )
}

export default Link
