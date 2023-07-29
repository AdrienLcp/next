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
   * Icon for 
   */
  icon?: JSX.Element

  /**
   * Sort option alphabetically if true
   * 
   * @default false
   */
  isAlphabeticallySorted?: boolean
  onChange: (option: IComboboxOption) => void
}

export interface IComboboxOption {
  key: string
  value: string
  icon?: JSX.Element
}
