import styles from './SwitchStyles.module.sass'
import type { ISwitchProps } from './SwitchTypes'
import { Tooltip } from '@/components'

const Switch: React.FC<ISwitchProps> = ({
  value = false,
  onChange,
  label = '',
  tooltip = '',
  size = '1.2em',
  ...rest
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked)
  }

  return (
    <div
      className={styles.container}
      style={{ '--switch-base-size': size } as React.CSSProperties}
    >
      <Tooltip text={tooltip}>
        <label className={styles.switch}>
          <input
            type='checkbox'
            checked={value}
            onChange={handleChange}
            className={styles.input}
            {...rest}
          />

          <span className={styles.slider} />

          {label && (
            <span className={styles.label}>{label}</span>            
          )}
        </label>
      </Tooltip>
    </div>
  )
}

export default Switch
