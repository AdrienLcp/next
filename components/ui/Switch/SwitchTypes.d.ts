type OmittedInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

export interface ISwitchProps extends OmittedInputProps {
  /**
   * Boolean value
   * 
   * @default false
   */
  value: boolean

  /**
   * onChange function
   */
  onChange: (value: boolean) => void

  /**
   * Label
   */
  label?: string

  /**
   * Tooltip
   */
  tooltip?: string

  /**
   * Size
   * 
   * @default '1.2em'
   */
  size?: string
}
