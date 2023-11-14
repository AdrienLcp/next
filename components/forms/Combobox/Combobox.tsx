'use client'
import styles from './ComboboxStyles.module.sass'
import type { IComboboxOption, IComboboxProps } from './ComboboxTypes'

import { useEffect, useMemo, useRef, useState } from 'react'

import { SearchIcon, ArrowIcon, CheckIcon } from '@/icons'
import { Button, TextField } from '@/components'
import { useLocale } from '@/hooks'
import { classNames, getSortedArray  } from '@/utils'

export const Combobox: React.FC<IComboboxProps> = ({
  options = [],
  label = '',
  placeholder = '',
  value = null,
  defaultValue = null,
  icon = null,
  isAlphabeticallySorted = false,
  hasFilter = false,
  isClearable = false,
  onChange,
  inputClassName = '',
  scrollToKeyOnOpen = '',
  areOptionsDismissedOnSelect = true
}) => {
  const { getString } = useLocale()

  const listRef = useRef<HTMLUListElement | null>(null)
  const filterRef = useRef<HTMLInputElement | null>(null)
  const optionToFocusRef = useRef<HTMLButtonElement | null>(null)
  const optionToScrollRef = useRef<HTMLButtonElement | null>(null)

  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [optionsFilterText, setOptionsFilterText] = useState<string>('')
  const [selectedOption, setSelectedOption] = useState<IComboboxOption | null>(value || defaultValue)

  useEffect(() => {
    if (isFocused) {
      if (filterRef.current) {
        filterRef.current.focus()
      }
      
      if (listRef.current) {
        listRef.current.scrollTop = 0
      }

      if (optionToFocusRef.current) {
        optionToFocusRef.current.focus()
      }

      if (optionToScrollRef.current) {
        // optionToScrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, [isFocused])

  const sortedOptions = useMemo(() => {
    if (isAlphabeticallySorted) {
      return getSortedArray(options, 'value')
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

    if (areOptionsDismissedOnSelect) {
      setIsFocused(false)
    }
  }

  const handleResetCombobox = () => {
    if (isClearable) {
      setSelectedOption(null)
      onChange(null)
      setOptionsFilterText('')      
    }
  }

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (listRef.current && !listRef.current.contains(event.relatedTarget)) {
      setIsFocused(false)
    }
  }

  return (
    <div
      role='combobox'
      aria-expanded={isFocused}
      aria-owns='combobox-list'
      aria-haspopup='listbox'
      aria-activedescendant={selectedOption?.key || ''}
      aria-controls={filteredOptions.map(option => option.key).join(',')}
      className={styles.combobox}
      tabIndex={0}
      onBlur={handleBlur}
    >
      <TextField
        value={selectedOption?.value || ''}
        label={label}
        onFocus={() => setIsFocused(true)}
        placeholder={placeholder}
        onClear={isClearable ? handleResetCombobox : undefined}
        icon={icon} 
        className={classNames(styles.input, inputClassName)}
        aria-label={!isFocused ? getString('components.combobox.open') : ''}
        onChange={() => {}}
      />

      {/* //! Pourquoi ça apparait pas cette merde */}
      {/* isClearable && non plus */}
      {/* {!selectedOption && value && ( */}
        <ArrowIcon
          className={styles.arrow}
          color='var(--text-lighter)'
          orientation={isFocused ? 'up' : 'down'}
        />
      {/* )} */}
      {/* //! Pourquoi ça apparait pas cette merde */}
      
      <ul
        role='listbox'
        id='combobox-list'
        ref={listRef}
        className={classNames(
          styles.list,
          (isFocused && options.length > 0) ? styles.open : null
        )}
      >
        {hasFilter && (
          <li
            key='select-filter-field'
            className={classNames(
              styles.option,
              styles.button,
              styles.filterField
            )}
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
        )}

        {filteredOptions.map((option) => {
          const isSelected = option === selectedOption || option.key === value?.key || option.key === defaultValue?.key
          let ref: React.MutableRefObject<HTMLButtonElement | null>

          if (scrollToKeyOnOpen === option.key) {
            ref = optionToFocusRef
          } else {
            const optionKey = parseInt(option.key)
            const keyToScroll = parseInt(scrollToKeyOnOpen)

            if (!isNaN(optionKey) && !isNaN(keyToScroll) && keyToScroll - 3 === optionKey) {
              ref = optionToScrollRef
            }
          }

          return (
            <li
              role='option'
              id={option.key}
              aria-selected={isSelected}
              aria-current={isSelected}
              key={option.key}
              className={styles.option}
            >
              <Button
                className={styles.button}
                ref={
                  scrollToKeyOnOpen === option.key
                    ? optionToFocusRef
                    : !isNaN(parseInt(option.key))
                      && !isNaN(parseInt(scrollToKeyOnOpen))
                      && parseInt(scrollToKeyOnOpen) - 2 === parseInt(option.key)
                        ? optionToScrollRef
                        : null
                }
                icon={icon}
                onClick={() => handleSelectOption(option)}
                aria-label={`${getString('components.combobox.select')} ${option.value}`}
              >
                <div className={styles.content}>
                  <span>{option.value}</span>

                  {isSelected && <CheckIcon color='var(--success)' />}
                </div>
              </Button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
