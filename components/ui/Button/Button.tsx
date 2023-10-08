import styles from './ButtonStyles.module.sass'
import type { IButtonProps } from './ButtonTypes'

import { forwardRef, useCallback } from 'react'

import { Loader } from '@/icons'

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(({
  children = null,
  icon = null,
  variant = null,
  iconSide = 'left',
  isLoading = false,
  isDisabled = false,
  className = '',
  ...rest
}, ref) => {
  const getLoaderColor = useCallback(() => {
    switch (variant) {
      case 'contained':
        return 'hsl(var(--primary-foreground))'

      case 'icon':
      case 'outlined':
      case 'underline':
      default:
        return 'hsl(var(--primary))'
    }
  }, [variant])

  return (
    <button
      className={`
        ${styles.button}
        ${styles[iconSide]}
        ${variant && styles[variant]}
        ${isLoading && styles.loading}
        ${isDisabled && styles.disabled}
        ${className}
      `}
      ref={ref}
      disabled={isDisabled || isLoading}
      aria-disabled={isDisabled || isLoading}
      aria-busy={isLoading}
      type='button'
      {...rest}
    >
      {isLoading && icon
        ? <Loader color={getLoaderColor()} aria-hidden='true' />
        : icon
      }

      {children}
    </button>
  )
})

Button.displayName = 'Button'
