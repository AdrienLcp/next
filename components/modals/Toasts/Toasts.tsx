import styles from './ToastsStyles.module.sass'
import { Toast } from '@/components'
import { useToasts } from '@/hooks'

export const Toasts: React.FC = () => {
  const { toasts } = useToasts()

  return (
    <ul className={styles.list}>
      {toasts.map(toast => (
        <li
          key={toast.id}
          className={styles.item}
        >
          <Toast toast={toast} />
        </li>
      ))}
    </ul>
  )
}
