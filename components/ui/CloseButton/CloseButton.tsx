import styles from './CloseButtonStyles.module.sass'
import type { ICloseButtonProps } from './CloseButtonTypes'

import { Button, Tooltip } from '@/components'
import { CrossIcon } from '@/icons'
import { useLocale } from '@/hooks'
import { classNames } from '@/utils'

export const CloseButton: React.FC<ICloseButtonProps> = ({
  onClick,
  size = '1.3em',
  color = 'hsl(var(--foreground))',
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
        className={classNames(styles.button, className)}
        aria-label={tooltip || getString('actions.close')}
        style={{ 
          '--close-button-base-size': size,
          '--close-button-border-color': color
        } as React.CSSProperties }
      />
    </Tooltip>
  )
}
