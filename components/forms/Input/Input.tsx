'use client'
import { forwardRef, useId, useRef } from 'react'

import type { IInputProps } from './InputTypes'
import styles from './InputStyles.module.sass'

import { InfoIcon } from '@/icons'
import { Tooltip } from '@/components'
import { classNames } from '@/utils'

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
        className={classNames(
          styles.input,
          icon ? styles['input-with-left-content'] : null,
          rightContent ? styles['input-with-right-content'] : null,
          icon && rightContent ? styles['input-with-left-and-right-content'] : null,
          isCaretHidden ? styles['without-caret'] : null,
        )}
        ref={ref}
        id={id || inputId}
        type={type}
        required={isRequired}
        disabled={isDisabled}
        {...rest}
      />

      <div className={classNames(styles.foreground, hasError ? styles.error : null)}>
        {icon && (
          <div className={styles.left}>{icon}</div>
        )}

        {label && (
          <label
            className={classNames(styles.label, icon ? styles['label-with-left-content'] : null)}
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
        <span className={classNames(styles.tooltip, styles[tooltip.side || 'right'])}>
          <Tooltip text={tooltip.text}>
            <InfoIcon color='hsl(var(--muted-foreground))' />
          </Tooltip>
        </span>
      )}
    </div>
  )
})

Input.displayName = 'Input'
