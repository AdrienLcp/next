import styles from './PaginationStyles.module.sass'
import type { IPaginationProps } from './PaginationTypes'

import { useMemo } from 'react'

import { Button } from '@/components'
import { useLocale } from '@/hooks'

const Pagination: React.FC<IPaginationProps> = ({
  totalContentsCount,
  maxContentsCountPerPage = 10,
  currentPage = 1,
  onPageChange,
  isDisabled = false
}) => {
  const { getString } = useLocale()

  const pages: number[] = useMemo(() => {
    if (totalContentsCount <= maxContentsCountPerPage) {
      return []
    }

    const pagesCount = Math.ceil(totalContentsCount / maxContentsCountPerPage)
    return Array.from({length: pagesCount}, (_, i) => i + 1)
  }, [totalContentsCount, maxContentsCountPerPage])

  const displayedButtons: number[] = useMemo(() => {
    const currentPageIndex = pages.indexOf(currentPage)

    if (pages.length < 7) {
      return pages
    }

    if (currentPage < 4) {
      const buttonsToDisplay = [1,2,3,4,5,6, pages.length]
      return buttonsToDisplay
    } else if (currentPage > pages.length - 4) {
      const buttonsToDisplay = [1, ...pages.slice(pages.length - 6, pages.length)]
      return buttonsToDisplay
    } else {
      const buttonsToDisplay = pages.slice(currentPageIndex - 2, currentPageIndex + 3);

      buttonsToDisplay.unshift(pages[0])
      buttonsToDisplay.push(pages[pages.length - 1])

      return buttonsToDisplay
    }
  }, [pages, currentPage])

  const contentsDisplayedRange = useMemo(() => {
    const firstRange = Math.max(1, maxContentsCountPerPage * currentPage - maxContentsCountPerPage + 1)
    let lastRange = maxContentsCountPerPage * currentPage

    if (lastRange > totalContentsCount) {
      lastRange = totalContentsCount
    }

    if (firstRange === lastRange) {
      return firstRange
    }

    return `${firstRange} - ${lastRange}`
  }, [maxContentsCountPerPage, currentPage, totalContentsCount])

  if (pages.length < 2) {
    return null
  }

  return (
    <section className={styles.pagination}>
      <ul className={styles.list}>
        {/* <li key='pagination-list-item-previous-page'>
          <Button
            className={`${styles.button} ${styles.arrow}`}
            isDisabled={currentPage === 1 || isDisabled}
            onClick={() => onPageChange(currentPage - 1)}
          >
            <ArrowIcon size='2em' orientation='left' />
          </Button>
        </li> */}

        {displayedButtons.map(page => (
          <li key={page}>
            <Button
              className={`${styles.button} ${currentPage === page && styles.active}`}
              onClick={() => currentPage !== page && onPageChange(page)}
              isDisabled={isDisabled}
            >
              {page}
            </Button>
          </li>
        ))}

        {/* <li key='pagination-list-item-next-page'>
          <Button
            className={`${styles.button} ${styles.arrow}`}
            isDisabled={currentPage === pages.length || isDisabled}
            onClick={() => onPageChange(currentPage + 1)}
          >
            <ArrowIcon size='2em' orientation='right' />
          </Button>
        </li> */}
      </ul>

      <p className={styles.text}>
        {contentsDisplayedRange} / {totalContentsCount}
      </p>
    </section>
  )
}

export default Pagination
