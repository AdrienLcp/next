import type { IDatePickerProps } from './DatePickerTypes'
import styles from './DatePickerStyles.module.sass'

import { default as DatePickerReact } from 'react-datepicker'

export const DatePicker: React.FC<IDatePickerProps> = ({
  value,
  selected,
  onChange,
  onSelect
}) => {

  return (
    <div className={styles.container}>
      <DatePickerReact
        value={value}
        selected={selected}
        onChange={onChange}
        onSelect={onSelect}

        className={styles.component}

        wrapperClassName={styles.wrapper}

        calendarClassName={styles.calendar}

        clearButtonClassName={styles.clear}

        popperClassName={styles.popper}

        monthClassName={(_date) => styles.month}

        weekDayClassName={(_date) => styles.weekDay}

        dayClassName={(_date) => styles.day}

        timeClassName={(_date) => styles.time}

        renderMonthContent={() => <div style={{ display: 'flex' }}>oui</div>}

        renderCustomHeader={() => <div>oui</div>}
      />
      
    </div>
  )
}
