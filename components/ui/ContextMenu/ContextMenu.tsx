'use client'
import type { IContextMenuProps } from './ContextMenuTypes'
import styles from './ContextMenuStyles.module.sass'

import { useEffect, useRef, useState } from 'react'

import { Button } from '@/components'
import { DotsIcon } from '@/icons'
import { useLocale } from '@/hooks'
import { classNames } from '@/utils'

export const ContextMenu: React.FC<IContextMenuProps> = ({ actions }) => {
  const { getString } = useLocale()

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [itemsFocused, setItemsFocused] = useState<number[]>([])

  const firstActionRef = useRef<HTMLButtonElement | null>(null)
  const listRef = useRef<HTMLUListElement | null>(null)

  useEffect(() => {
    if (isMenuOpen) {
      if (firstActionRef.current) {
        firstActionRef.current.focus()
      }
      
      if (listRef.current) {
        listRef.current.scrollTop = 0
      }
    }
  }, [isMenuOpen])

  useEffect(() => {
    setIsMenuOpen(itemsFocused.length !== 0)
  }, [itemsFocused])

  return (
    <div className={styles.container}>
      <Button
        className={styles.button}
        variant='icon'
        icon={<DotsIcon />}
        aria-label={getString('components.contextMenu.open')}
        aria-haspopup='true'
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen(true)}
      />

      <ul
        className={classNames(styles.menu, isMenuOpen ? styles.open : null)}
        ref={listRef}
        role='menu'
      >
        {actions.map((action, index) => (
          <li key={index}>
            <Button
              ref={index === 0 ? firstActionRef : null}
              onClick={action.onClick}
              onFocus={() => setItemsFocused(_ => [index])}
              onBlur={() => setItemsFocused(items => items.filter(item => item !== index))}
              aria-label={action.ariaLabel || `${getString('components.contextMenu.choose')} ${action.label}`}
              className={styles.action}
              role='menuitem'
            >
              {action.icon}
              {action.label}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}
