type OmittedButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled' | 'className'>

export interface IButtonProps extends OmittedButtonProps {
  /**
   * Button variant
   * @type 'icon' |
   *       'primary' |
   *       'secondary' |
   *       'underline' |
   *       'danger' |
   *       'warning' |
   *       'success' |
   *       'info'
   * @defaultValue null
   */
  variant?: ButtonVariant

  /**
   * Icon from '@/icons'
   */
  icon?: React.ReactNode

  /**
   * Icon side in the button (left or right)
   * @type 'left' | 'right'
   * @defaultValue 'left'
   */
  iconSide?: 'left' | 'right'
  
  /**
   * Loading State
   * 
   * Show Loader when true
   * 
   * Replace icon by loader when true
   * @defaultValue false
   */
  isLoading?: boolean
  
  /**
   * Disabled State
   * @defaultValue false
   */
  isDisabled?: boolean
  
  /**
   * Additionnal className to personnalize styles
   */
  className?: string
}

type ButtonVariant =
  'icon' |
  'primary' |
  'secondary' |
  'underline' |
  'danger' |
  'warning' |
  'success' |
  'info'
