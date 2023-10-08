import type { IIconProps } from '@/types'
import { iconDefaultAttributes, iconDefaultProps } from '@/icons'

export const ErrorIcon: React.FC<IIconProps> = ({
  size = iconDefaultProps.size,
  color = iconDefaultProps.color,
  ...rest
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 16 16'
    aria-hidden
    {...iconDefaultAttributes}
    {...rest}
  >
    <g
      fill='none'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
    >
      <path d='m10.25 5.75l-4.5 4.5m0-4.5l4.5 4.5' />
      <circle cx='8' cy='8' r='6.25' />
    </g>
  </svg>
)
