import styles from './TextFieldStyles.module.sass'
import type { ITextFieldProps } from './TextFieldTypes'

import { useMemo, useRef, useState } from 'react'

import { CrossIcon, EyeIcon } from '@/icons'
import { Button, Tooltip } from '@/components'
import { useLocale } from '@/hooks'

export const TextField: React.FC<ITextFieldProps> = ({
  value = '',
  label = '',
  error = '',
  tooltip = '',
  type = 'text',
  isPassword = false,
  isDisabled = false,
  isRequired = true,
  limit = null,
  icon = null,
  onClear = null,
  fieldClassName = '',
  inputClassName = '',
  labelClassName = '',
  buttonClassName = '',
  iconClassName = '',
  ...rest
}) => {
  const { getString } = useLocale()
  const inputRef = useRef<HTMLInputElement>(null)
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)

  const isLimitExceed = useMemo(() => {
    if (limit && value) {
      return limit - value.length < 0
    }

    return false
  }, [limit, value])

  const limitLeft = useMemo(() => {
    if (limit && value) {
      return isLimitExceed ? limit : limit - value.length
    }
    return limit
  }, [limit, value, isLimitExceed])

  const handleClearInput = () => {
    if (onClear) {
      onClear()
      inputRef.current?.focus()
    }
  }

  const handleTogglePasswordVisibily = () => {
    inputRef.current?.focus()
    setIsPasswordVisible((prev) => !prev)
  }

  const currentType = useMemo(() => {
    if (isPassword) {
      return isPasswordVisible ? type : 'password'
    }
    return type
  }, [isPassword, isPasswordVisible, type])

  return (
    <div className={`${styles.field} ${fieldClassName}`}>
      <Tooltip text={tooltip}>
        <input
          className={`
            ${styles.input}
            ${icon && styles.inputWithIcon}
            ${value && styles.valid}
            ${inputClassName}
          `}
          value={value}
          ref={inputRef}
          required={isRequired}
          disabled={isDisabled}
          id={`input-${label}-id`}
          type={currentType}
          aria-describedby={error && `input-${label}-error`}
          {...rest}
        />

        {icon && <div className={`${styles.icon} ${iconClassName}`}>{icon}</div>}

        <label
          className={`
            ${styles.label}
            ${icon && styles.labelWithIcon}
            ${labelClassName}
          `}
          htmlFor={`input-${label}-id`}
        >
          {label}
        </label>

        {limit && !error && (
          <span className={styles.limit}>
            {limitLeft}{' '}
            {isLimitExceed
              ? getString('components.textField.max')
              : getString('components.textField.limit')}
          </span>
        )}
      </Tooltip>

      {isPassword && value ? (
        <div className={styles.buttonWrapper}>
          <Tooltip
            text={
              isDisabled
                ? ''
                : isPasswordVisible
                  ? getString('actions.hidePassword')
                  : getString('actions.showPassword')
            }
          >
            <Button
              className={`${styles.button} ${buttonClassName}`}
              aria-label={
                isPasswordVisible
                  ? getString('actions.hidePassword')
                  : getString('actions.showPassword')
              }
              tabIndex={-1}
              onClick={handleTogglePasswordVisibily}
            >
              <EyeIcon size='1.2em' isCrossed={isPasswordVisible} color='var(--text-light)' />
            </Button>
          </Tooltip>
        </div>
      ) : (
        onClear &&
        value && (
          <div className={styles.buttonWrapper}>
            <Tooltip text={isDisabled ? '' : getString('actions.clear.title')}>
              <Button
                className={`${styles.button} ${buttonClassName}`}
                type='reset'
                isDisabled={isDisabled}
                aria-label={getString('actions.clear.label')}
                tabIndex={-1}
                onClick={onClear}
              >
                <CrossIcon size='1.2em' color='var(--text-light)' />
              </Button>
            </Tooltip>
          </div>
        )
      )}

      {error && (
        <Tooltip text={error} tooltipClassName={styles.tooltip}>
          <span id={`input-${label}-error`} className={styles.error}>{error}</span>
        </Tooltip>
      )}
    </div>
  )
}
