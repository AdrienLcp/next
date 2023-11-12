'use client'
import { useMemo, useRef } from 'react'

import type { ITextFieldProps } from './TextFieldTypes'
import styles from './TextFieldStyles.module.sass'

import { Button, Input } from '@/components'
import { CrossIcon } from '@/icons'

export const TextField: React.FC<ITextFieldProps> = ({
  value,
  onChange,
  onClear = null,
  type = 'text',
  limit = 0,
  isDisabled = false,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const limitMessage = useMemo(() => {
    if (value !== undefined && limit > 0) {
      return `${value.length}/${limit}`
    }
    return ''
  }, [value, limit])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!onChange || value === undefined || isDisabled || (limit > 0 && event.target.value.length === limit + 1)) {
      return
    }

    onChange(event.target.value)
  }

  const handleClear = () => {
    onChange && onChange('')
    onClear && onClear()
    inputRef.current && inputRef.current.focus()
  }

  return (
    <Input
      ref={inputRef}
      type={type}
      value={value}
      onChange={onChange && handleChange}
      message={limitMessage}
      isDisabled={isDisabled}
      rightContent={(!!onChange && !!value) && (
        <Button onClick={handleClear} className={styles.button}>
          <CrossIcon color='hsl(var(--muted-foreground))' />
        </Button>
      )}
      {...rest}
    />
  )
}
