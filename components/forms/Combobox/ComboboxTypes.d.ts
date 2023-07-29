export interface IComboboxProps {
  /**
   * Label
   */
  label: string

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
  value?: IComboboxOption

  /**
   * {
   *   key: string
   *   value: string
   *   icon?: JSX.Element
   * }
   */
  defaultValue?: IComboboxOption

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
