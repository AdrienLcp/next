import type { IInputProps } from '@/components/forms/Input/InputTypes'

type OmittedInputProps = 
  'rightContent'
  | 'rightContentZIndex'
  | 'isCaretHidden'
  | 'type'
  | 'onChange'
  | 'value'
  | 'message'

type TextFieldProps = Omit<IInputProps, OmittedInputProps>

export interface ITextFieldProps extends TextFieldProps {
  /**
  * Value
  * @default undefined
  */
  value?: string

  /**
  * Change function
  * @default undefined
  */
  onChange?: (value: string) => void

  /**
   * Type
   * @default 'text'
   */
  type?: 'text' | 'password' | 'search' | 'email'

  /**
   * Display limit message under input if limit > 0
   * @default 0
   */
  limit?: number
  
  /**
   * Clear input function
   * Display cross icon button on the right side if not null
   */
  onClear?: () => void
}
