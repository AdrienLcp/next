import type { IIconProps } from '@/types'

const InfoIcon: React.FC<IIconProps> = ({
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
      {...rest}
    >
      <path
        fill={color}
        d='M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8a8.01 8.01 0 0 1-8 8Zm0-8.5a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1Zm0-4a1.25 1.25 0 1 0 1.25 1.25A1.25 1.25 0 0 0 12 7.5Z'
      />
    </svg>
  )
}

export default InfoIcon
