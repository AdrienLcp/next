import styles from './ToastsStyles.module.sass'
import type { IToastProps } from './ToastsTypes'

import { useCallback, useEffect, useMemo, useState } from 'react'

import { CheckIcon, ErrorIcon, InfoIcon, WarningIcon } from '@/icons'
import { useTimeout, useToasts } from '@/hooks'
import { CloseButton } from '@/components'

export const Toast: React.FC<IToastProps> = ({ toast }) => {
  const [isDeleted, setIsDeleted] = useState<boolean>(false)
  const { deleteToast } = useToasts()
  const [processRemoveToast] = useTimeout(() => onDeleteToast(), toast.duration)
  const [processDeleteToast] = useTimeout(() => deleteToast(toast.id), 300)

  useEffect(() => {
    processRemoveToast()
  }, [processRemoveToast])

  const onDeleteToast = useCallback(() => {
    setIsDeleted(true)
    processDeleteToast()
  }, [setIsDeleted, processDeleteToast])

  const icon = useMemo(() => {
    if (toast.icon) {
      return toast.icon
    }

    switch (toast.type) {
      case 'success':
        return <CheckIcon />
      case 'warning':
        return <WarningIcon />
      case 'error':
        return <ErrorIcon />
      case 'default':
      default:
        return <InfoIcon />
    }
  }, [toast])

  return (
    <article className={`${styles.toast} ${styles[toast.type]} ${isDeleted && styles.deleted}`}>
      <div className={styles.heading}>
        <header className={styles.header}>
          {icon}

          {toast.title && (
            <h2 className={styles.title}>
              {toast.title}
            </h2>
          )}
        </header>

        <aside className={styles.close}>
          <CloseButton onClick={onDeleteToast} />
        </aside>        
      </div>

      <p className={styles.content}>
        {toast.content}
      </p>
    </article>
  )
}
