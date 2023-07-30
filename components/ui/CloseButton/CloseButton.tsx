import { useContext } from 'react'
import styles from './CloseButtonStyles.module.sass'
import type { ICloseButtonProps } from './CloseButtonTypes'
import { Button, Tooltip } from '@/components'
import { CrossIcon } from '@/icons'
import { LocaleContext } from '@/contexts'

const CloseButton: React.FC<ICloseButtonProps> = ({
  onClick,
  size = '1.3em',
  tooltip = '',
  className = ''
}) => {
  const { getString } = useContext(LocaleContext)

  return (
    <div className={styles.close}>
      <Tooltip text={tooltip || getString('actions.close')}>
        <Button
          onClick={onClick}
          variant='icon'
          icon={<CrossIcon size={size} />}
          className={`${styles.button} ${className}`}
          aria-label={tooltip || getString('actions.close')}
        />
      </Tooltip>
    </div>
  )
}

export default CloseButton
