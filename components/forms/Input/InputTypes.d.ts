type OmittedInputProps = 'disabled' | 'required' | 'type' | 'id'
type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, OmittedInputProps>

export interface IInputProps extends InputProps {
  /**
   * Translatable label
   */
  label?: string

  /**
   * Unique ID
   */
  id?: string

  /**
   * Display content on left side of the input
   */
  icon?: React.ReactNode

  /**
   * Display tooltip on right or left
   */
  tooltip?: IInputTooltip

  /**
   * Display message under input
   */
  message?: string

  /**
   * Add styles to input if not null & display error message under input
   * Override "message" prop if not null
   */
  hasError?: boolean

  /**
   * Display content on right side of the input
   */
  rightContent?: React.ReactNode

  /**
   * Z index for right when displayed
   */
  rightContentZIndex?: number

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

export interface IInputTooltip {
  side?: 'right' | 'left'
  text: string
}
