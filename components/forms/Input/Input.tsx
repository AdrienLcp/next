import { forwardRef, useId, useRef } from 'react'

import type { IInputProps } from './InputTypes'
import styles from './InputStyles.module.sass'

import { InfoIcon } from '@/icons'
import { Tooltip } from '@/components'

export const Input = forwardRef<HTMLInputElement, IInputProps>(({
  label = '',
  id = '',
  message = '',
  type = 'text',
  hasError = false,
  isDisabled = false,
  isRequired = true,
  isCaretHidden = false,
  icon = null,
  rightContent = null,
  tooltip = null,
  ...rest
}, ref) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const inputId = useId()

  return (
    <div className={styles.container}>
      <input
        className={`
          ${styles.input}
          ${icon && styles['input-with-left-content']}
          ${rightContent && styles['input-with-right-content']}
          ${icon && rightContent && styles['input-with-left-and-right-content']}
          ${isCaretHidden && styles['without-caret']}
        `}
        ref={ref}
        id={id || inputId}
        type={type}
        required={isRequired}
        disabled={isDisabled}
        {...rest}
      />

      <div className={`${styles.foreground} ${hasError && styles.error}`}>
        {icon && (
          <div className={styles.left}>{icon}</div>
        )}

        {label && (
          <label
            className={`${styles.label} ${icon && styles['label-with-left-content']}`}
            htmlFor={id || inputId}
          >
            {label}
          </label>
        )}
      </div>
      
      {message && (
        <span
          className={styles.message}
          style={{ maxWidth: containerRef.current ? `${containerRef.current.offsetWidth}px` : 'none' }}
        >
          {message}
        </span>        
      )}
      
      {rightContent && (
        <div className={styles['right-content']}>
          {rightContent}
        </div>
      )}
      
      {tooltip && (
        <span className={`${styles.tooltip} ${styles[tooltip.side || 'right']}`}>
          <Tooltip text={tooltip.text}>
            <InfoIcon color='hsl(var(--muted-foreground))' />
          </Tooltip>
        </span>
      )}
    </div>
  )
})

Input.displayName = 'Input'
