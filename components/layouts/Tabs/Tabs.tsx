import { useState } from 'react'

import styles from './TabsStyles.module.sass'
import type { ITabsProps } from './TabsTypes'

import { Button } from '@/components'
import { useLocale } from '@/hooks'
import { classNames } from '@/utils'

export const Tabs: React.FC<ITabsProps> = ({
  tabs,
  commonContent
}) => {
  const { getString } = useLocale()
  const [selectedTab, setSelectedTad] = useState<number>(0)

  return (
    <section className={styles.tabs} role='tablist'>
      <header className={styles.heading}>
        {tabs.map((tab, index) => (
          <Button
            key={index}
            className={classNames(styles.button, selectedTab === index ? styles.selected : null)}
            aria-label={`${getString('components.tabs.goTo')} ${tab.label}`}
            onClick={() => setSelectedTad(index)}
            role='tab'
            aria-selected={selectedTab === index}
            aria-controls={`panel-${tab}`}
            id={`tab-${tab.label}`}
            tabIndex={-1}
          >
            {tab.icon}
            {tab.label}
          </Button>
        ))}
      </header>
      <section
        id={`panel-${selectedTab}`}
        aria-labelledby={`tab-${selectedTab}`}
        role='tabpanel'
        tabIndex={0}
      >
        {commonContent && (
          <div className={styles.common}>
            {commonContent}
          </div>
        )}

        <div className={styles.content}>
          {tabs[selectedTab].content}
        </div>        
      </section>
    </section>
  )
}
