import styles from './SwitchStyles.module.sass'
import type { ISwitchProps } from './SwitchTypes'

import { Tooltip } from '@/components'

export const Switch: React.FC<ISwitchProps> = ({
  value = false,
  onChange,
  label = '',
  tooltip = '',
  size = '1.2em',
  ...rest
}) => (
  <div
    className={styles.container}
    style={{ '--switch-base-size': size } as React.CSSProperties}
  >
    <Tooltip text={tooltip}>
      <label className={styles.switch}>
        <input
          type='checkbox'
          checked={value}
          onChange={(event) => onChange(event.target.checked)}
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
