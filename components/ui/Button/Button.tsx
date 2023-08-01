import { useCallback } from 'react'
import styles from './ButtonStyles.module.sass'
import type { IButtonProps } from './ButtonTypes'
import { Loader } from '@/icons'

const Button: React.FC<IButtonProps> = ({
  children = null,
  icon = null,
  iconSide = 'left',
  variant = '',
  isLoading = false,
  isDisabled = false,
  className = '',
  ...rest
}) => {
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
      disabled={isDisabled || isLoading}
      type='button'
      {...rest}
    >
      {isLoading && icon ? <Loader color={getLoaderColor()} /> : icon}

      {children}
    </button>
  )
}

export default Button
