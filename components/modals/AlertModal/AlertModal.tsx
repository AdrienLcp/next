import styles from './AlertModalStyles.module.sass'
import type { IAlertModalProps } from '@/components/modals/AlertModal/AlertModalTypes'
import { Button, Modal } from '@/components'

const AlertModal: React.FC<IAlertModalProps> = ({
  title,
  text,
  isOpen,
  onConfirm,
  onCancel
}) => {

  return (
    <Modal isOpen={isOpen} onClose={onCancel} title={title}>

      <div>
        <Button
          onClick={onConfirm}
          variant='primary'
        >

        </Button>
        
        <Button
          onClick={onCancel}
          variant='secondary'
        >

        </Button>
      </div>
    </Modal>
  )
}

export default AlertModal
