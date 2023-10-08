import { forwardRef } from 'react'

import type { ITextFieldProps } from './TextFieldTypes'
import styles from './TextFieldStyles.module.sass'

import { useLocale } from '@/hooks'
import { Input } from '@/components'

export const TextField = forwardRef<HTMLInputElement, ITextFieldProps>(({
  onChange,
  onClear = null,
  message = '',
  type = 'text',
  isDisabled,
  ...rest
}, ref) => {
  const { getString } = useLocale()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isDisabled) {
      onChange(event.target.value || '')
    }
  }

  return (
    <div className={styles.container}>

      {/* MESSAGE  { type: 'error' | 'limit'  ? } */}

      <Input
        ref={ref}
        type={type}
        onChange={handleChange}
        {...rest}
      />

      {/* CLEAR BUTTON */}
    </div>
  )
})

TextField.displayName = 'TextField'
