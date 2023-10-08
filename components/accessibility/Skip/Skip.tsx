import { ISkipProps } from './SkipTypes'
import styles from './SkipStyles.module.sass'

import { useLocale } from '@/hooks'

export const Skip: React.FC<ISkipProps> = ({
  children,
  id,
  label
}) => {
  const { getString } = useLocale()
  const currentId = id || `${Math.random()}`

  return (
    <div className={styles.container}>
      <a href={currentId} className={styles.link}>
        {label || getString('components.skip.label')}
      </a>

      {children}

      <div id={currentId} />
    </div>
  )
}
