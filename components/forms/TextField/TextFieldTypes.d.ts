import type { IInputProps } from '@/components/forms/Input/InputTypes'

type OmittedInputProps = 'rightContent' | 'isCaretHidden' | 'type' | 'onChange'
type TextFieldProps = Omit<IInputProps, OmittedInputProps>

export interface ITextFieldProps extends TextFieldProps {
  /**
   * Type
   * @default 'text'
   */
  type?: 'text' | 'password' | 'search' | 'email'


  message?: string
  
  onChange: (value: string) => void
  
  /**
   * Clear input function
   * Display cross icon button on the right side if not null
   */
  onClear?: () => void
}
