import { classNames } from '@/utils'
import styles from './TooltipStyles.module.sass'
import type { ITooltipProps } from './TooltipTypes'

export const Tooltip: React.FC<ITooltipProps> = ({
  children = null,
  text = '',
  containerClassName = '',
  tooltipClassName = ''
}) => {
  return (
    <div className={classNames(styles.container, containerClassName)}>
      {children}

      {text &&
        <span className={classNames(styles.tooltip, tooltipClassName)}>
          {text}
        </span>
      }
    </div>
  )
}
