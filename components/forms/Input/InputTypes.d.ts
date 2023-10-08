type OmittedInputProps = 'disabled' | 'required' | 'type' | 'id'
type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, OmittedInputProps>

export interface IInputProps extends InputProps {
  /**
   * Translatable label
   */
  label?: string

  /**
   * Display content on left side of the input
   */
  icon?: React.ReactNode

  /**
   * Display content on right side of the input
   */
  rightContent?: React.ReactNode

  /**
   * Z-index for right content
   * @default 0
   */
  rightContentZIndex?: number,

  /**
   * Unique ID
   */
  id?: string

  /**
   * Input type
   * @default 'text'
   */
  type?: 'text' | 'email' | 'search' | 'number' | 'password' | 'date'

  /**
   * Override 'disabled'
   * @default false
   */
  isDisabled?: boolean

  /**
   * Override 'required'
   * @default false
   */
  isRequired?: boolean

  /**
   * Hide caret when true
   * @default false
   */
  isCaretHidden?: boolean
}
