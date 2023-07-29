import type { IArrowIconProps } from '@/types'
import { useMemo } from 'react'

const ArrowIcon: React.FC<IArrowIconProps> = ({
  size = '1em',
  color = 'var(--text)',
  orientation = 'down',
  ...rest
}) => {
  const rotationValue = useMemo(() => {
    switch (orientation) {
      case 'up':
        return 180
      case 'left':
        return 90
      case 'right':
        return 270
      case 'down':
      default:
        return 0
    }
  }, [orientation])

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      style={{ transition: 'transform 250ms', transform: `rotate(${rotationValue}deg)` }}
      {...rest}
    >
      <path
        fill={color}
        d='M12 14.975q-.2 0-.388-.075t-.312-.2l-4.6-4.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062Z'
      />
    </svg>
  )
}

export default ArrowIcon
