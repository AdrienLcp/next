import styles from './TooltipStyles.module.sass'
import type { ITooltipProps } from './TooltipTypes'

const Tooltip: React.FC<ITooltipProps> = ({
  children,
  text,
  className
}) => {
  return (
    <div className={styles.container}>
      {children}

      {text &&
        <span
          className={`${styles.tooltip} ${className}`}
          aria-label={text}
        >
          {text}
        </span>
      }
    </div>
  )
}

export default Tooltip
