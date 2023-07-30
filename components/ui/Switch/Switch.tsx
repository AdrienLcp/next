import styles from './SwitchStyles.module.sass'
import type { ISwitchProps } from './SwitchTypes'
import { Button, Tooltip } from '@/components'

const Switch: React.FC<ISwitchProps> = ({
  value = false,
  onChange,
  label = '',
  tooltip = '',
  size = '1.6em',
  ...rest
}) => {
  return (
    <Tooltip text={tooltip}>
      <Button
        className={styles.button}
        onClick={() => onChange(!value)}
      >
        <label
          style={{ "--switch-size": size } as React.CSSProperties}
          className={styles.switch}
          htmlFor={`${label}-switch-input`}
        >
          <input
            className={styles.input}
            type='checkbox'
            id={`${label}-switch-input`}
            checked={value}
            onChange={() => onChange(value)}
            {...rest}
          />
          <div className={styles.slider} />
        </label>

        {label && (
          <span className={styles.label}>
            {label}
          </span>
        )}
      </Button>
    </Tooltip>
  )
}

export default Switch
