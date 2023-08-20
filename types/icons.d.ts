export interface IIconProps extends React.SVGProps<SVGSVGElement> {
  /**
   * Size of icon
   * 
   * @defaultValue '1em'
   */
  size?: string

  /**
   * Color of icon
   * App text color by default
   * 
   * @defaultValue 'var(--text)'
   */
  color?: string
}

export interface IEyeIconProps extends IIconProps {
  /**
   * Crossed eye state
   * 
   * @defaultValue false
   */
  isCrossed?: boolean
}

export interface IArrowIconProps extends IIconProps {
  /**
   * Arrow orientation
   * 
   * @defaultValue 'down'
   */
  orientation?: 'left' | 'right' | 'up' | 'down'
}
