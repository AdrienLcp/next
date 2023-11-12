'use client'
import { useEffect, useRef } from 'react'
import styles from './AlertModalStyles.module.sass'
import type { IAlertModalProps } from './AlertModalTypes'

import { Button, Modal } from '@/components'
import { useLocale } from '@/hooks'

export const AlertModal: React.FC<IAlertModalProps> = ({
  text,
  onConfirm,
  onClose,
  isOpen,
  ...rest
}) => {
  const { getString } = useLocale()
  const firstButtonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (isOpen && firstButtonRef.current) {
      firstButtonRef.current.focus()
    }
  }, [isOpen])

  return (
    <Modal isOpen={isOpen} onClose={onClose} {...rest}>
      <div className={styles.content}>
        <p className={styles.text}>
          {text}
        </p>

        <div className={styles.buttons}>
          <Button
            onClick={onConfirm}
            variant='contained'
            ref={firstButtonRef}
          >
            {getString('actions.confirm')}
          </Button>
          
          <Button
            onClick={onClose}
            variant='outlined'
          >
            {getString('actions.cancel')}
          </Button>
        </div>
      </div>
    </Modal>
  )
}
