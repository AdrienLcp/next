import styles from './ButtonStyles.module.sass'
import type { IButtonProps } from './ButtonTypes'

import { forwardRef, useCallback } from 'react'

import { Loader } from '@/icons'

const Button = forwardRef<HTMLButtonElement, IButtonProps>(({
  children = null,
  icon = null,
  iconSide = 'left',
  variant = '',
  isLoading = false,
  isDisabled = false,
  className = '',
  ...rest
}, ref) => {
  const getLoaderColor = useCallback(() => {
    switch (variant) {
      case 'primary':
      case 'danger':
      case 'success':
      case 'warning':
      case 'info':
        return 'var(--white)'

      case 'icon':
      case 'secondary':
      case 'underline':
      default:
        return 'var(--primary)'
    }
  }, [variant])

  return (
    <button
      className={`
        ${styles.button}
        ${styles[variant]}
        ${styles[iconSide]}
        ${isLoading && styles.loading}
        ${isDisabled && styles.disabled}
        ${className}
      `}
      ref={ref}
      disabled={isDisabled || isLoading}
      type='button'
      {...rest}
    >
      {isLoading && icon ? <Loader color={getLoaderColor()} /> : icon}

      {children}
    </button>
  )
})

Button.displayName = "Button"

export default Button
