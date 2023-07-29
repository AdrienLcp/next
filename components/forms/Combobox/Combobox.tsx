import { useContext, useMemo, useState } from 'react'
import styles from './ComboboxStyles.module.sass'
import type { IComboboxOption, IComboboxProps } from './ComboboxTypes'
import { SearchIcon } from '@/icons'
import { LocaleContext } from '@/contexts'
import { TextField } from '@/components'

const Combobox: React.FC<IComboboxProps> = ({
  label,
  options,
  value,
  icon,
  onChange
}) => {
  const { getString } = useContext(LocaleContext)

  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [optionsFilterText, setOptionsFilterText] = useState<string>('')
  const [selectedOption, setSelectedOption] = useState<IComboboxOption | null>(null)

  const filteredOptions = useMemo(() => {
    if (optionsFilterText) {
      const filter = optionsFilterText.trim().toLowerCase()
      return options.filter(option =>  filter.includes(option.value.trim().toLowerCase()))
    }

    return options
  }, [options, optionsFilterText])
  
  const handleSelectOption = (option: IComboboxOption) => {

  }

  return (
    <div className={styles.combobox} aria-expanded={isFocused}>
      <TextField
        value={selectedOption?.value || optionsFilterText || ''}
        onChange={(e) => setOptionsFilterText(e.target.value)}
        label={label}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        icon={isFocused && !value ? <SearchIcon /> : icon}
        iconClassName={`${styles.icon} ${isFocused && !value && styles.search}`}
      />
      
      <ul className={`${styles.list} ${isFocused && styles.open}`}>
        {filteredOptions.map((option) => (
          <li key={option.key} className={styles.option}>
            <button
              type='button'
              onClick={() => handleSelectOption(option)}
              aria-label={`${getString('components.combobox.select')} ${option.value}`}
            >
              {option.icon}
              {option.value}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Combobox
