export interface IDatePickerProps {
  value?: Date
  onChange: (date: Date) => void
  label?: string
  placeholder?: string


  // TODO
  max?: string
  min?: string
}

export interface IMonth {
  id: number
  name: MonthName
  dayCount: number
  leapYearDayCount?: number
}

export type MonthName = 
  'january' |
  'february' |
  'march' |
  'april' |
  'may' |
  'june' |
  'july' |
  'august' |
  'september' |
  'october' |
  'november' |
  'december'

export type WeekDay =
  'monday' |
  'tuesday' |
  'wednesday' |
  'thursday' |
  'friday' |
  'saturday' |
  'sunday'
