import styles from './ScreenReaderLoadingStyles.module.sass'
import { useLocale } from '@/hooks'

export const ScreenReaderLoading: React.FC = () => {
  const { getString } = useLocale()

  return (
    <span className={styles.hidden}>
      {getString('states.loading')}
    </span>
  )
}
