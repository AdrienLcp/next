import styles from './TabsStyles.module.sass'
import type { ITabsProps } from './TabsTypes'
import { useState } from 'react'
import { Button } from '@/components'

const Tabs: React.FC<ITabsProps> = ({
  tabs,
  commonContent
}) => {
  const [selectedTab, setSelectedTad] = useState<number>(0)

  return (
    <section className={styles.tabs}>
      <header className={styles.heading}>
        {tabs.map((tab, index) => (
          <Button
            key={index}
            className={`${styles.button} ${selectedTab === index && styles.selected}`}
            onClick={() => setSelectedTad(index)}
          >
            {tab.icon}
            {tab.label}
          </Button>
        ))}
      </header>

      {commonContent && (
        <div className={styles.common}>
          {commonContent}
        </div>
      )}

      <div className={styles.content}>
        {tabs[selectedTab].content}
      </div>
    </section>
  )
}

export default Tabs
