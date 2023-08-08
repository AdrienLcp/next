import styles from './AlertModalStyles.module.sass'
import type { IAlertModalProps } from './AlertModalTypes'
import { Button, Modal } from '@/components'
import { useLocale } from '@/hooks'

const AlertModal: React.FC<IAlertModalProps> = ({
  title,
  text,
  isOpen,
  onConfirm,
  onClose
}) => {
  const { getString } = useLocale()

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <div className={styles.content}>
        <p className={styles.text}>
          {text}
        </p>

        <div className={styles.buttons}>
          <Button
            onClick={onConfirm}
            variant='primary'
          >
            {getString('actions.confirm')}
          </Button>
          
          <Button
            onClick={onClose}
            variant='secondary'
          >
            {getString('actions.cancel')}
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default AlertModal
