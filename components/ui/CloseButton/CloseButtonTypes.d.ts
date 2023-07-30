export interface ICloseButtonProps {
  /**
   * Close action
   */
  onClick: () => void
  
  /**
   * Size of button
   * 
   * @default '1em'
   */
  size?: string

  /**
   * Tooltip will be aria-label if not null
   * 
   * @default 'Close' (translated)
   */
  tooltip?: string

  /**
   * Add styles to Close Button
   */
  className?: string
}
