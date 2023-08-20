import styles from './SkeletonStyles.module.sass'
import type { ISkeletonProps } from './SkeletonTypes'

export const Skeleton: React.FC<ISkeletonProps> = ({
  width = 400,
  height = 30
}) => {
  return (
    <div
      className={styles.skeleton}
      style={{ width: `${width}px`, height: `${height}px` }}
    />
  )
}
