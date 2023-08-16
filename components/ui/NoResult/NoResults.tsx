import styles from './NoResultsStyles.module.sass'

import { useLocale } from '@/hooks'

const NoResults: React.FC = () => {
  const { getString } = useLocale()

  return (
    <p className={styles.message}>
      {getString('errors.noResults')}
    </p>
  )
}

export default NoResults
