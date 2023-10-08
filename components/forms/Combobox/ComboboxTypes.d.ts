export interface IComboboxProps {
  /**
   * Label
   */
  label?: string

  /**
   * Array of
   * {
   *   key: string
   *   value: string
   *   icon?: JSX.Element
   * }
   */
  options: IComboboxOption[]

  /**
   * {
   *   key: string
   *   value: string
   *   icon?: JSX.Element
   * }
   */
  value?: IComboboxOption | null

  /**
   * {
   *   key: string
   *   value: string
   *   icon?: JSX.Element
   * }
   */
  defaultValue?: IComboboxOption

  /**
   * Display a filter input on top of the options if true
   * 
   * @default false
   */
  hasFilter?: boolean

  /**
   * Icon
   */
  icon?: JSX.Element

  /**
   * Placeholder of input
   */
  placeholder?: string

  /**
   * Sort option alphabetically if true
   * 
   * @default false
   */
  isAlphabeticallySorted?: boolean

  /**
   * onChange function
   */
  onChange: (option: IComboboxOption | null) => void

  /**
   * Choose an option key to focus & scroll to when user open the combobox 
   */
  scrollToKeyOnOpen?: string

  /**
   * Input className
   */
  inputClassName?: string

  /**
   * Display clear button to reset values to null if true
   * 
   * @default false
   */
  isClearable?: boolean

  /**
   * Dismiss options on select
   * 
   * @default true
   */
  areOptionsDismissedOnSelect?: boolean
}

export interface IComboboxOption {
  /**
   * Key must be unique
   */
  key: string
  
  /**
   * Value
   */
  value: string

  /**
   * Icon
   */
  icon?: JSX.Element
}
