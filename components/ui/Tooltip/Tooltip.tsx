import styles from './TooltipStyles.module.sass'
import type { ITooltipProps } from './TooltipTypes'

export const Tooltip: React.FC<ITooltipProps> = ({
  children = null,
  text = '',
  containerClassName = '',
  tooltipClassName = ''
}) => {
  return (
    <div className={`${styles.container} ${containerClassName}`}>
      {children}

      {text &&
        <span className={`${styles.tooltip} ${tooltipClassName}`}>
          {text}
        </span>
      }
    </div>
  )
}
