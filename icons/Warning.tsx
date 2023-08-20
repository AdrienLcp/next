import type { IIconProps } from '@/types'

export const WarningIcon: React.FC<IIconProps> = ({
  size = '1em',
  color = 'var(--text)',
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 1024 1024'
      aria-hidden='true'
      role='presentation'
      focusable='false'
      {...rest}
    >
      <path
        fill={color}
        d='M464 720a48 48 0 1 0 96 0a48 48 0 1 0-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z'
      />
    </svg>
  )
}
