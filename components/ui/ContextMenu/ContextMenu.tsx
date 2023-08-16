import type { IContextMenuProps } from './ContextMenuTypes'
import styles from './ContextMenuStyles.module.sass'

import { useState } from 'react'

import { Button } from '@/components'
import { DotsIcon } from '@/icons'


const ContextMenu: React.FC<IContextMenuProps> = ({
  actions
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <div className={styles.container} onBlur={() => setIsMenuOpen(false)}>
      <Button
        className={styles.button}
        variant='icon'
        icon={<DotsIcon />}
        onClick={() => setIsMenuOpen(prev => !prev)}
      />

      <ul className={`${styles.menu} ${isMenuOpen && styles.open}`}>
        {actions.map((action, index) => (
          <li key={index}>
            <Button
              onClick={action.onClick}
              className={styles.action}
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

export default ContextMenu
