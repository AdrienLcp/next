export interface IIconProps extends React.SVGProps<SVGSVGElement> {
  /**
   * Size of icon
   * 
   * @default '1.5rem'
   */
  size?: string

  /**
   * Color of icon
   * App text color by default
   * 
   * @default 'hsl(var(--foreground))'
   */
  color?: string
}

export interface IArrowIconProps extends IIconProps {
  /**
   * Arrow orientation
   * 
   * @default 'down'
   */
  orientation?: 'left' | 'right' | 'up' | 'down'
}

export interface IDotIconProps extends IIconProps {
  /**
   * Fill state
   * 
   * @default false
   */
  isFilled?: boolean
}

export interface IEyeIconProps extends IIconProps {
  /**
   * Crossed eye state
   * 
   * @default false
   */
  isCrossed?: boolean
}
