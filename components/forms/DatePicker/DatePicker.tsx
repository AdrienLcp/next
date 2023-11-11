import type { IComboboxOption } from '@/components/forms/Combobox/ComboboxTypes'
import type { IDatePickerProps, IMonth, WeekDay } from './DatePickerTypes'
import styles from './DatePickerStyles.module.sass'

import { useMemo, useRef, useState } from 'react'

import { TextField, Button, Combobox } from '@/components'
import { useLocale } from '@/hooks'
import { CalendarIcon } from '@/icons'
import { classNames } from '@/utils'
  
const weekDays: WeekDay[] = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday'
]

const months: IMonth[] = [
  {
    id: 0,
    name: 'january',
    dayCount: 31
  },
  {
    id: 1,
    name: 'february',
    dayCount: 28,
    leapYearDayCount: 29
  },
  {
    id: 2,
    name: 'march',
    dayCount: 31
  },
  {
    id: 3,
    name: 'april',
    dayCount: 30
  },
  {
    id: 4,
    name: 'may',
    dayCount: 31
  },
  {
    id: 5,
    name: 'june',
    dayCount: 30
  },
  {
    id: 6,
    name: 'july',
    dayCount: 31
  },
  {
    id: 7,
    name: 'august',
    dayCount: 31
  },
  {
    id: 8,
    name: 'september',
    dayCount: 30
  },
  {
    id: 9,
    name: 'october',
    dayCount: 31
  },
  {
    id: 10,
    name: 'november',
    dayCount: 30
  },
  {
    id: 11,
    name: 'december',
    dayCount: 31
  }
]

const years = Array.from({ length: 200 }).map((_, index) => index + 1900)

const yearComboboxOptions: IComboboxOption[] = years.map(year => ({ key: year.toString(), value: year.toString() }))

const now = new Date()

export const DatePicker: React.FC<IDatePickerProps> = ({
  value,
  onChange,
  label = '',
  placeholder = ''
}) => {
  const [selectedMonth, setSelectedMonth] = useState<IMonth>(months[now.getMonth()])
  const [selectedYear, setSelectedYear] = useState<number>(now.getFullYear())
  const [isFocused, setIsFocused] = useState<boolean>(false)

  const containerRef = useRef<HTMLDivElement | null>(null)
  const { getString } = useLocale()





  const days = useMemo(() => {
    const firstDayOfCurrentMonth = new Date(selectedYear, selectedMonth.id).getDay()
    
    const daysArray = Array.from({ length: selectedMonth.dayCount })
    const dayCountToFill = 35 - selectedMonth.dayCount
    
    console.log(firstDayOfCurrentMonth)

    // TODO : se servir de ce nombre comme index pour associer le jour (nombre) au jour de la semaine et aligner le calendar comme il faut
    //! attention : dimanche = 0

  }, [selectedMonth, selectedYear])


  //! Attention le mois sélectionné par défaut garde la <CheckIcon /> quand je sélectionne un autre mois



  const monthComboboxOptions: IComboboxOption[] = months.map(month => ({
    key: `month-${month.id}`,
    value: getString(`components.date.months.${month.name}`)
  }))

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (containerRef.current && !containerRef.current.contains(event.relatedTarget)) {
      setIsFocused(false)
    }
  }

  const handleMonthSelectionChange = (option: IComboboxOption) => {
    const currentMonth = months.find(month => month.id.toString() === option.key)

    if (currentMonth) {
      setSelectedMonth(currentMonth)
    }
  }

  // TODO : Aligner les dates aux bons jours par rapport au mois sélectionné et à l'année sélectionnée dans le Calendrier

  const handleDateSelectionChange = (selectedDay: number) => {
    const selectedDate = new Date(selectedYear, selectedMonth.id, selectedDay)
    console.log(selectedDate)
    onChange(selectedDate)
  }

  return (
    <div
      className={styles.container}
      tabIndex={0}
      onBlur={handleBlur}
    >
      <TextField
        icon={<CalendarIcon />}
        value={value?.toLocaleDateString() || ''}
        onChange={() => {}}
        onFocus={() => setIsFocused(true)}
        label={label}
        placeholder={placeholder || getString('components.date.placeholder')}
      />

      <div 
        className={classNames(styles.popover, isFocused ? styles.focused : null)}
        ref={containerRef}
      >
        <section className={styles.calendar}>
          <header className={styles.header}>
            <div className={styles.monthCombobox}>
              <Combobox
                hasFilter
                options={monthComboboxOptions}
                onChange={(option) => option && handleMonthSelectionChange(option)}
                value={monthComboboxOptions[selectedMonth.id]}
              />              
            </div>

            <div className={styles.yearCombobox}>
              <Combobox
                hasFilter
                options={yearComboboxOptions}
                value={{ key: selectedYear.toString(), value: selectedYear.toString() }}
                onChange={(option) => option && setSelectedYear(parseInt(option.key))}
                scrollToKeyOnOpen={selectedYear.toString()}
              />
            </div>
          </header>

          <ul className={styles.days}>
            {weekDays.map(weekDay => (
              <li key={weekDay}>
                {getString(`components.date.days.${weekDay}`).substring(2, 0)}
              </li>
            ))}

            {Array.from({ length: selectedMonth.dayCount }).map((_, index) => (
              <li
                key={index}
                // aria-current
                // aria-selected
              >
                {/* //! use date fns pour créer 30 jours après la date d'auj et 30 jours avant la date d'auj ? */}
                {/* //! idem pour chaque fois qu'on change de mois ou d'année */}
                <Button
                  className={styles.day}
                  onClick={() => handleDateSelectionChange(index + 1)}
                >
                  {index + 1}
                </Button>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
