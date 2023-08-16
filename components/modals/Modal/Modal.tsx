import styles from './ModalStyles.module.sass'
import type { IModalProps } from './ModalTypes'

import { createPortal } from 'react-dom'

import { CloseButton } from '@/components'

const Modal: React.FC<IModalProps> = ({
  children,
  onClose,
  isOpen = false,
  isBlocking = false,
  title = '',
  modalClassName = '',
  closeButtonClassName = ''
}) => {
  return (
    <>
      {isOpen && createPortal(
        <section className={styles.wrapper}>
          <div
            className={styles.behind}
            onClick={() => !isBlocking && onClose()}
          />

          <dialog
            open={true}
            className={`${styles.container} ${modalClassName}`}
            autoFocus
          >
            <header className={styles.header}>
              <h1 className={styles.title}>
                {title}
              </h1>

              {!isBlocking && (
                <CloseButton
                  className={closeButtonClassName}
                  onClick={onClose}
                />
              )}
            </header>

            {children}
          </dialog>
        </section>,
        document.body
      )}
    </>
  )
}

export default Modal
