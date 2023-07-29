import { useContext, useMemo, useRef, useState } from 'react'
import styles from './ComboboxStyles.module.sass'
import type { IComboboxOption, IComboboxProps } from './ComboboxTypes'
import { SearchIcon, ArrowIcon, CheckIcon } from '@/icons'
import { LocaleContext } from '@/contexts'
import { TextField } from '@/components'

const Combobox: React.FC<IComboboxProps> = ({
  options,
  label = '',
  value = null,
  defaultValue = null,
  icon = null,
  placeholder = '',
  onChange
}) => {
  const { getString } = useContext(LocaleContext)

  const listRef = useRef<HTMLUListElement | null>(null)

  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [optionsFilterText, setOptionsFilterText] = useState<string>('')
  const [selectedOption, setSelectedOption] = useState<IComboboxOption | null>(defaultValue)

  const filteredOptions = useMemo(() => {
    if (optionsFilterText) {
      const filter = optionsFilterText.trim().toLowerCase()
      return options.filter(option => option.value.trim().toLowerCase().includes(filter))
    }

    return options
  }, [options, optionsFilterText])
  
  const handleSelectOption = (option: IComboboxOption) => {
    if (option !== selectedOption) {
      setSelectedOption(option)
      onChange(option)
    }

    setIsFocused(true)
  }

  const reset = () => {
    setSelectedOption(null)
    setOptionsFilterText('')
    onChange(null)
  }

  const handleBlur = (event: any) => {
    if (listRef && listRef.current) {
      if (!listRef?.current.contains(event.relatedTarget)) {
        setIsFocused(false)
      }      
    }
  }

  return (
    <div
      className={styles.combobox}
      tabIndex={0}
      onBlur={handleBlur}
    >
      <TextField
        value={selectedOption?.value || ''}
        label={label}
        onFocus={() => setIsFocused(true)}
        placeholder={placeholder}
        onClear={reset}
        icon={icon}
        inputClassName={styles.input}
      />

      {!selectedOption && !value && (
        <ArrowIcon
          className={styles.arrow}
          color='var(--text-lighter)'
          orientation={isFocused ? 'up' : 'down'}
        />
      )}
      
      <ul
        ref={listRef}
        className={`${styles.list} ${isFocused && options.length && styles.open}`}
      >
        <li
          key='select-filter-field'
          className={`${styles.option} ${styles.button} ${styles.filterField}`}
          onClick={() => setIsFocused(true)}
        >
          <SearchIcon color='var(--text-lighter)' className={styles.search} />

          <input
            className={styles.filter}
            type='search'
            placeholder={`${getString('components.combobox.filter')}...`}
            value={optionsFilterText}
            onChange={(e) => setOptionsFilterText(e.target.value)}
          />
        </li>

        {filteredOptions.map((option) => (
          <li key={option.key} className={styles.option}>
            <button
              className={styles.button}
              type='button'
              onClick={() => handleSelectOption(option)}
              aria-label={`${getString('components.combobox.select')} ${option.value}`}
            >
              <div className={styles.content}>
                {option.icon}
                {option.value}
              </div>

              {option === selectedOption && (
                <CheckIcon color='var(--success)' />
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Combobox
