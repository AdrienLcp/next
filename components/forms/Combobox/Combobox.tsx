import styles from './ComboboxStyles.module.sass'
import type { IComboboxOption, IComboboxProps } from './ComboboxTypes'

import { useEffect, useMemo, useRef, useState } from 'react'

import { SearchIcon, ArrowIcon, CheckIcon } from '@/icons'
import { Button, TextField } from '@/components'
import { useLocale } from '@/hooks'
import { sortByAlphabeticalOrder  } from '@/utils'

export const Combobox: React.FC<IComboboxProps> = ({
  options = [],
  label = '',
  placeholder = '',
  value = null,
  defaultValue = null,
  icon = null,
  isAlphabeticallySorted = false,
  onChange
}) => {
  const { getString } = useLocale()

  const listRef = useRef<HTMLUListElement | null>(null)
  const filterRef = useRef<HTMLInputElement | null>(null)

  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [optionsFilterText, setOptionsFilterText] = useState<string>('')
  const [selectedOption, setSelectedOption] = useState<IComboboxOption | null>(defaultValue)

  useEffect(() => {
    if (isFocused) {
      if (filterRef.current) {
        filterRef.current.focus()
      }
      if (listRef.current) {
        listRef.current.scrollTop = 0
      }
    }
  }, [isFocused])

  const sortedOptions = useMemo(() => {
    if (isAlphabeticallySorted) {
      return sortByAlphabeticalOrder(options, 'value')
    }

    return options
  }, [options, isAlphabeticallySorted])

  const filteredOptions = useMemo(() => {
    if (optionsFilterText) {
      const filter = optionsFilterText.trim().toLowerCase()
      return sortedOptions.filter(option => option.value.trim().toLowerCase().includes(filter))
    }

    return sortedOptions
  }, [sortedOptions, optionsFilterText])
  
  const handleSelectOption = (option: IComboboxOption) => {
    if (option !== selectedOption) {
      setSelectedOption(option)
      onChange(option)
    }

    setIsFocused(true)
  }

  const reset = () => {
    setSelectedOption(null)
    onChange(null)
    setOptionsFilterText('')
  }

  const handleBlur = (event: React.FocusEvent) => {
    if (listRef && listRef.current) {
      if (!listRef?.current.contains(event.relatedTarget)) {
        setIsFocused(false)
      }      
    }
  }

  return (
    <div
      role='combobox'
      aria-expanded={isFocused}
      aria-owns='combobox-list'
      aria-haspopup='listbox'
      aria-activedescendant={selectedOption?.key || ''}
      aria-controls={options.map(option => option.key).join(',')}
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
        aria-label={!isFocused ? getString('components.combobox.open') : ''}
        onChange={() => {}}
      />

      {!selectedOption && !value && (
        <ArrowIcon
          className={styles.arrow}
          color='var(--text-lighter)'
          orientation={isFocused ? 'up' : 'down'}
        />
      )}
      
      <ul
        role='listbox'
        id='combobox-list'
        ref={listRef}
        className={`${styles.list} ${isFocused && options.length && styles.open}`}
      >
        <li
          key='select-filter-field'
          className={`${styles.option} ${styles.button} ${styles.filterField}`}
        >
          <SearchIcon color='var(--text-lighter)' className={styles.search} />

          <input
            className={styles.filter}
            type='search'
            ref={filterRef}
            placeholder={`${getString('components.combobox.filter')}...`}
            value={optionsFilterText}
            onChange={(e) => setOptionsFilterText(e.target.value)}
          />
        </li>

        {filteredOptions.map((option) => (
          <li
            role='option'
            id={option.key}
            aria-selected={option === selectedOption}
            key={option.key}
            className={styles.option}
          >
            <Button
              className={styles.button}
              icon={icon}
              onClick={() => handleSelectOption(option)}
              aria-label={`${getString('components.combobox.select')} ${option.value}`}
            >
              <div className={styles.content}>
                <span>{option.value}</span>

                {option === selectedOption && (
                  <CheckIcon color='var(--success)' />
                )}                
              </div>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}
