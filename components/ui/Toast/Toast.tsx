import styles from './ToastStyles.module.sass'
import type { IToastProps } from './ToastTypes'
import { useEffect, useMemo, useState } from 'react'
import { CloseButton } from '@/components'
import { CheckIcon, ErrorIcon, InfoIcon, WarningIcon } from '@/icons'

const Toast: React.FC<IToastProps> = ({
  message = '',
  variant = 'warning',
  className = ''
}) => {
  const [isDisplayed, setIsDisplayed] = useState<boolean>(true)
  const [isHidden, setIsHidden] = useState<boolean>(false)

  useEffect(() => {
    let timeoutId: number

    if (isHidden) {
      timeoutId = window.setTimeout(() => {
        setIsDisplayed(false)
      }, 500)
    }

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [isHidden])

  const icon = useMemo(() => {
    const iconSize = '1.6em'

    switch (variant) {
      case 'info':
        return <InfoIcon size={iconSize} color={'var(--white)'} />

      case 'success':
        return <CheckIcon size={iconSize} color={'var(--success)'} />

      case 'warning':
        return <WarningIcon size={iconSize} color={'var(--warning)'} />

      case 'error':
        return <ErrorIcon size={iconSize} color={'var(--error)'} />
      
      default:
        return <></>
    }
  }, [variant])

  return (
    <>
      {isDisplayed && (
        <div className={`
          ${styles.toast}
          ${message && styles.displayed}
          ${isHidden && styles.hidden}
          ${styles[variant]}
          ${className}
        `}>
          <div className={styles.content}>
            {icon}

            <p className={styles.message}>
              {message}
            </p>
          </div>

          <CloseButton
            size={'1em'}
            color={variant === 'info' ? 'var(--white-light)' : 'var(--black-lighter)'}
            onClick={() => setIsHidden(true)}
          />
        </div>
      )}
    </>
  )
}

export default Toast
