import styles from './DatePickerStyles.module.sass'
import type { IDate, IDatePickerProps } from './DatePickerTypes'

import { useMemo, useState } from 'react'

import { TextField } from '@/components'
import { CalendarIcon } from '@/icons'

export const DatePicker: React.FC<IDatePickerProps> = ({
  onChange,
  label = '',
  placeholder = '',
  value = null,
  icon = null
}) => {
  const [date, setDate] = useState<IDate>({
    day: null,
    month: null,
    year: null
  })

  const handleChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value)

    if (isNaN(value)) {
      return
    }

    setDate({
      day: [0, 1],
      month: [0, 1],
      year: [2,0,0,0]
    })
  }

  const formattedDate = useMemo(() => {
    let day = ''
    let month = ''
    let year = ''

    if (date.day === null) {

    }
  }, [date])

  return (
    <div>
      {/* <input type='date' className={styles.date} /> */}

      <TextField
        label={label}
        placeholder={placeholder}
        value={''}
        onChange={handleChangeDate}
      />

      <div>
        {icon ? icon : <CalendarIcon size={"2em"} />}
      </div>
    </div>
  )
}
