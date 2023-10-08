import type { IIconProps } from '@/types'
import { iconDefaultAttributes, iconDefaultProps } from '@/icons'

export const CheckIcon: React.FC<IIconProps> = ({
  size = iconDefaultProps.size,
  color = iconDefaultProps.color,
  ...rest
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    aria-hidden
    {...iconDefaultAttributes}
    {...rest}
  >
    <path
      fill={color}
      d='M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41L9 16.17z'
    />
  </svg>
)
