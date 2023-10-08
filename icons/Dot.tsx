import type { IDotIconProps } from '@/types'
import { iconDefaultAttributes, iconDefaultProps } from '@/icons'

export const DotIcon: React.FC<IDotIconProps> = ({
  size = iconDefaultProps.size,
  color = iconDefaultProps.color,
  isFilled = false,
  ...rest
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 256 256'
    width={size}
    height={size}
    {...iconDefaultAttributes}
    {...rest}
  >
    <path
      fill={color}
      d={
        isFilled
          ? 'M156 128a28 28 0 1 1-28-28a28 28 0 0 1 28 28Z'
          : 'M128 98a30 30 0 1 0 30 30a30 30 0 0 0-30-30Zm0 48a18 18 0 1 1 18-18a18 18 0 0 1-18 18Z'
      }
    />
  </svg>
)
