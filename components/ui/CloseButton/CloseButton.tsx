import styles from './CloseButtonStyles.module.sass'
import type { ICloseButtonProps } from './CloseButtonTypes'

import { Button, Tooltip } from '@/components'
import { CrossIcon } from '@/icons'
import { useLocale } from '@/hooks'

const CloseButton: React.FC<ICloseButtonProps> = ({
  onClick,
  size = '1.3em',
  color = 'var(--text)',
  tooltip = '',
  className = ''
}) => {
  const { getString } = useLocale()

  return (
    <Tooltip text={tooltip || getString('actions.close')}>
      <Button
        onClick={onClick}
        variant='icon'
        icon={<CrossIcon size={size} color={color} />}
        className={`${styles.button} ${className}`}
        aria-label={tooltip || getString('actions.close')}
        style={{ 
          '--close-button-base-size': size,
          '--close-button-border-color': color
        } as React.CSSProperties }
      />
    </Tooltip>
  )
}

export default CloseButton
