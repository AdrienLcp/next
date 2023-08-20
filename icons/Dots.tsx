import type { IIconProps } from '@/types'

export const DotsIcon: React.FC<IIconProps> = ({
  size = '1em',
  color = 'var(--text)',
   ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      aria-hidden='true'
      role='presentation'
      focusable='false'
      {...rest}
    >
      <path
        fill={color}
        d='M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z'
      />
    </svg>
  )
}
