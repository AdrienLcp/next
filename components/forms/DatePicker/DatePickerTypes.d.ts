export interface IDatePickerProps {
    /**
   * onChange function
   */
  onChange: (newDate: Date) => void

  /**
   * Value
   */
  value?: Date

  /**
   * Label
   */
  label: string

  /**
   * Placeholder
   */
  placeholder?: string

  /**
   * Icon
   * 
   * @default DateIcon
   */
  icon?: JSX.Element

  /**
   * Min date
   */
  min?: Date

  /**
   * Max date
   */
  max?: Date
}

export interface IDate {
  day: [number, number] | null
  month: [number, number] | null
  year: [number, number, number, number] | null
}
