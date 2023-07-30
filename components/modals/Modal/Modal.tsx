import styles from './ModalStyles.module.sass'
import type { IModalProps } from './ModalTypes'
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { CloseButton } from '@/components'

let timeoutId: number

const Modal: React.FC<IModalProps> = ({
  children,
  onClose,
  isOpen = false,
  isBlocking = false,
  title = '',
  modalClassName = '',
  closeButtonClassName = ''
}) => {
  const modalRef = useRef<HTMLDialogElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    modalRef.current?.focus()

    return () => clearTimeout(timeoutId)
  }, [])

  const closeModal = () => {
    if (wrapperRef && wrapperRef.current) {
      wrapperRef.current.style.opacity = '0'
    }

    timeoutId = window.setTimeout(() => {
      onClose()
    }, 200)
  }

  return (
    <>
      {isOpen && createPortal(
        <div
          className={styles.wrapper}
          ref={wrapperRef}
        >
          <div
            className={styles.behind}
            onClick={() => !isBlocking && closeModal()}
          />

          <dialog
            open={true}
            className={`${styles.container} ${modalClassName}`}
            ref={modalRef}
          >
            {title && (
              <header className={styles.header}>
                <h1 className={styles.title}>
                  {title}
                </h1>
              </header>
            )}

            {children}

            {!isBlocking && (
              <CloseButton className={closeButtonClassName} onClick={closeModal} />
            )}
          </dialog>
        </div>,
        document.body
      )}
    </>
  )
}

export default Modal
