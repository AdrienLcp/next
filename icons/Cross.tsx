import type { IIconProps } from '@/types'

const CrossIcon: React.FC<IIconProps> = ({
  color = 'var(--text)',
  size = '1em',
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 16 16'
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
}

export default CrossIcon
