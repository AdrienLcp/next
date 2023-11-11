import styles from './SkeletonStyles.module.sass'
import type { ISkeletonProps } from './SkeletonTypes'
import { useLocale } from '@/hooks'

export const Skeleton: React.FC<ISkeletonProps> = ({
  width = 400,
  height = 30
}) => {
  const { getString } = useLocale()

  return (
    <div
      role='presentation'
      aria-label={getString('states.loading')}
      className={styles.skeleton}
      style={{ width: `${width}px`, height: `${height}px` }}
    />
  )
}
