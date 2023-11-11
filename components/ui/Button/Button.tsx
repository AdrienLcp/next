import styles from './ButtonStyles.module.sass'
import type { IButtonProps } from './ButtonTypes'

import { forwardRef, useCallback } from 'react'

import { Loader } from '@/icons'
import { classNames } from '@/utils'

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
      className={classNames(
        styles.button,
        icon ? styles[iconSide] : null,
        variant ? styles[variant] : null,
        isLoading ? styles.loading : null,
        isDisabled ? styles.disabled : null,
        className
      )}
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
