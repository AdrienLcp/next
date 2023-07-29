export interface IIconProps extends React.SVGProps<SVGSVGElement> {
  /**
   * Size of icon
   * 
   * @default '1em'
   */
  size?: string

  /**
   * Color of icon
   * App text color by default
   * 
   * @default 'var(--text)'
   */
  color?: string
}

export interface IEyeIconProps extends IIconProps {
  /**
   * Crossed eye state
   * 
   * @default false
   */
  isCrossed?: boolean
}

export interface IArrowIconProps extends IIconProps {
  /**
   * Arrow orientation
   * 
   * @default 'down'
   */
  orientation?: 'left' | 'right' | 'up' | 'down'
}
