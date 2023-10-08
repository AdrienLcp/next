export interface IDatePickerProps {
  value?: string
  onChange: (date: Date) => void
  onSelect?: (date: Date) => void
  selected?: Date
}
