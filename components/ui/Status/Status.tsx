import styles from './StatusStyles.module.sass'

import { useEffect, useMemo, useState } from 'react'

import { CheckIcon, ErrorIcon, InfoIcon, WarningIcon } from '@/icons'
import { useStatus, useTimeout } from '@/hooks'
import { CloseButton } from '@/components'

export const Status: React.FC = () => {
  const [isHidden, setIsHidden] = useState<boolean>(false)
  const { status, setStatus } = useStatus()

  const [closeToast] = useTimeout(() => resetStatus())
  
  // useEffect(() => {
  //   setStatus(null)
  // }, [window.location.href])

  const hideStatus = () => {
    setIsHidden(true)
    closeToast()
  }

  const resetStatus = () => {
    setStatus(null)
    setIsHidden(false)
  }

  //! deux de suite ça marche pas wtf

  const icon = useMemo(() => {
    if (!status) return null

    const iconSize = '1.6em'

    switch (status.type) {
      case 'success':
        return <CheckIcon size={iconSize} color={'var(--success)'} />
      case 'warning':
        return <WarningIcon size={iconSize} color={'var(--warning)'} />
      case 'error':
        return <ErrorIcon size={iconSize} color={'var(--error)'} />
      case 'default':
      default:
        return <InfoIcon size={iconSize} color={'var(--white)'} />
    }
  }, [status])

  if (!status) return null

  return (
    <div className={`
      ${styles.status}
      ${isHidden && styles.hidden}
      ${styles[status.type]}
    `}>
      <div className={styles.content}>
        {icon}

        <p className={styles.text}>
          {status.text}
        </p>
      </div>

      <CloseButton
        size={'1em'}
        color={status.type === 'default' ? 'var(--white-light)' : 'var(--black-lighter)'}
        onClick={hideStatus}
        className={styles.button}
      />
    </div>
  )
}
