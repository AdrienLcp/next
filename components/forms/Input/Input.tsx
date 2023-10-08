import { forwardRef, useId } from 'react'

import type { IInputProps } from './InputTypes'
import styles from './InputStyles.module.sass'

export const Input = forwardRef<HTMLInputElement, IInputProps>(({
  label = '',
  id = '',
  type = 'text',
  isDisabled = false,
  isRequired = true,
  isCaretHidden = false,
  icon = null,
  rightContent = null,
  rightContentZIndex = 0,
  ...rest
}, ref) => {
  const inputId = useId()

  return (
    <div className={styles.container}>
      <input
        className={`
          ${styles.input}
          ${icon && styles.inputWithLeftContent}
          ${rightContent && styles.inputWithRightContent}
          ${icon && rightContent && styles.inputWithLeftAndRightContent}
          ${isCaretHidden && styles.withoutCaret}
        `}
        ref={ref}
        id={id || inputId}
        type={type}
        required={isRequired}
        disabled={isDisabled}
        {...rest}
      />

      <div className={styles.foreground}>
        {icon && (
          <div className={styles.left}>{icon}</div>
        )}

        {label && (
          <label
            className={`${styles.label} ${icon && styles.labelWithLeftContent}`}
            htmlFor={id || inputId}
          >
            {label}
          </label>
        )}
      </div>

      {rightContent && (
        <div className={styles.right} style={{ zIndex: rightContentZIndex }}>
          {rightContent}
        </div>
      )}
    </div>
  )
})

Input.displayName = 'Input'
