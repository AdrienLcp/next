import type { IIconProps } from '@/types'

const Spinner: React.FC<IIconProps> = ({
  color = 'var(--primary)',
  size = '1em',
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
      <circle cx='12' cy='12' r='0' fill={color}>
        <animate
          id='svgSpinnersPulse20'
          fill='freeze'
          attributeName='r'
          begin='0;svgSpinnersPulse21.begin+0.6s'
          calcMode='spline'
          dur='1.2s'
          keySplines='.52,.6,.25,.99'
          values='0;11'
        ></animate>
        <animate
          fill='freeze'
          attributeName='opacity'
          begin='0;svgSpinnersPulse21.begin+0.6s'
          calcMode='spline'
          dur='1.2s'
          keySplines='.52,.6,.25,.99'
          values='1;0'
        ></animate>
      </circle>

      <circle cx='12' cy='12' r='0' fill={color}>
        <animate
          id='svgSpinnersPulse21'
          fill='freeze'
          attributeName='r'
          begin='svgSpinnersPulse20.begin+0.6s'
          calcMode='spline'
          dur='1.2s'
          keySplines='.52,.6,.25,.99'
          values='0;11'
        ></animate>
        <animate
          fill='freeze'
          attributeName='opacity'
          begin='svgSpinnersPulse20.begin+0.6s'
          calcMode='spline'
          dur='1.2s'
          keySplines='.52,.6,.25,.99'
          values='1;0'
        ></animate>
      </circle>
    </svg>
  )
}

export default Spinner
