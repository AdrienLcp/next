import type { IIconProps } from '@/types'

const SearchIcon: React.FC<IIconProps> = ({
  size = '1em',
  color = 'var(--text)'
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
    >
      <path
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2.5'
        d='m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314Z'
      />
    </svg>
  )
}

export default SearchIcon
