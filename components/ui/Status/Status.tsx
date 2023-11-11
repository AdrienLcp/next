import type { IStatusProps } from '@/components/ui/Status/StatusTypes'
import styles from './StatusStyles.module.sass'

import { useMemo } from 'react'

import { CheckIcon, ErrorIcon, InfoIcon, WarningIcon } from '@/icons'
import { CloseButton } from '@/components'
import { classNames } from '@/utils'

export const Status: React.FC<IStatusProps> = ({
  status,
  setStatus
}) => {
  const foregroundColor = useMemo(() => {
    if (!status) return 'hsl(var(--foreground))'

    switch (status.type) {
      case 'success':
        return 'hsl(var(--green-foreground))'
      case 'warning':
        return 'hsl(var(--orange-foreground))'
      case 'error':
        return 'hsl(var(--red-foreground))'
      case 'default':
      default:
        return 'hsl(var(--foreground))'
    }
  }, [status])

  const icon = useMemo(() => {
    if (!status) return null

    const iconProps = {
      size: '1.6em',
      color: foregroundColor
    }

    switch (status.type) {
      case 'success':
        return <CheckIcon {...iconProps} />
      case 'warning':
        return <WarningIcon {...iconProps} />
      case 'error':
        return <ErrorIcon {...iconProps} />
      case 'default':
      default:
        return <InfoIcon {...iconProps} />
    }
  }, [status, foregroundColor])

  if (!status) return null

  return (
    <div className={classNames(styles.status, styles[status.type])}>
      <div className={styles.content}>
        {icon}

        <p className={styles.text}>
          {status.text}
        </p>
      </div>

      <CloseButton
        size='1em'
        color={foregroundColor}
        onClick={() => setStatus(null)}
        className={styles.button}
      />
    </div>
  )
}
