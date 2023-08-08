type OmittedInputProps = 'disabled' | 'type' | 'required' | 'value' | 'className'
type InputOmit = Omit<React.InputHTMLAttributes<HTMLInputElement>, OmittedInputProps>

export interface ITextFieldProps extends InputOmit {
  /**
   * Input value
   */
  value: string

  /**
   * Text field label
   */
  label: string

  /**
   * Error text below input
   * All field is on red color when not null
   */
  error?: string

  /**
   * Tooltip that appears when user hover the input
   */
  tooltip?: string

  /**
   * Text field type
   * @default 'text'
   */
  type?: 'text' | 'email' | 'search' | 'number'

  /**
   * Can show password only if isPassword is true
   * onClear props goes null if isPassword is true
   */
  isPassword?: boolean

  /**
   * Disabled state
   */
  isDisabled?: boolean

  /**
   * Required state
   */
  isRequired?: boolean

  /**
   * Characters limit
   * Trigger an error when limit is exceed
   */
  limit?: number

  /**
   * Icon from '@/icons'
   */
  icon?: React.ReactNode

  /**
   * Clear function
   * Show a reset button when not null if value is not null
   * Null if isPassword is true
   */
  onClear?: () => void

  /**
   * Personnalize field styles (parent div)
   */
  fieldClassName?: string

  /**
   * Personnalize input styles
   */
  inputClassName?: string

  /**
   * Personnalize label styles
   */
  labelClassName?: string

  /**
   * Personnalize icon styles
   */
  iconClassName?: string

  /**
   * Personnalize clear button or show password button
   */
  buttonClassName?: string
}
