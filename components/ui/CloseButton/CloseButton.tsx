import styles from './CloseButtonStyles.module.sass'
import type { ICloseButtonProps } from './CloseButtonTypes'
import { Button, Tooltip } from '@/components'
import { CrossIcon } from '@/icons'
import { useLocale } from '@/hooks'

const CloseButton: React.FC<ICloseButtonProps> = ({
  onClick,
  size = '1.3em',
  color = 'var(--text)',
  position = 'top',
  tooltip = '',
  className = ''
}) => {
  const { getString } = useLocale()

  return (
    <div className={styles.close}>
      <Tooltip text={tooltip || getString('actions.close')}>
        <Button
          onClick={onClick}
          variant='icon'
          icon={<CrossIcon size={size} color={color} />}
          className={`${styles.button} ${className}`}
          aria-label={tooltip || getString('actions.close')}
          style={{ 
            '--close-button-base-size': size,
            '--close-button-top': position === 'top' ? '1em' : '50%',
            '--close-button-translate': position === 'top' ? '0%' : '-50%',
            '--close-button-border-color': color
          } as React.CSSProperties }
        />
      </Tooltip>
    </div>
  )
}

export default CloseButton
