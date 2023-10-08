import type { IIconProps } from '@/types'
import { iconDefaultAttributes, iconDefaultProps } from '@/icons'

export const CrossIcon: React.FC<IIconProps> = ({
  size = iconDefaultProps.size,
  color = iconDefaultProps.color,
  ...rest
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 16'
    width={size}
    height={size}
    aria-hidden
    {...iconDefaultAttributes}
    {...rest}
  >
    <path
      fill='none'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
      d='m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5'
    />
  </svg>
)
