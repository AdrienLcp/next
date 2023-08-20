import styles from './SrLoadingStyles.module.sass'
import { useLocale } from '@/hooks'

export const SrLoading: React.FC = () => {
  const { getString } = useLocale()

  return (
    <span className={styles.hidden}>
      {getString('states.loading')}
    </span>
  )
}
