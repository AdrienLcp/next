type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>

type ButtonVariant = 'icon' | 'contained' | 'outlined' | 'underline'

export interface IButtonProps extends ButtonProps {
  /**
   * Button variant
   * @type 'icon' | 'contained' | 'outlined' | 'underline'
   * @default null
   */
  variant?: ButtonVariant

  /**
   * Icon from '@/icons'
   */
  icon?: React.ReactNode

  /**
   * Icon side in the button (left or right)
   * @type 'left' | 'right'
   * @default 'left'
   */
  iconSide?: 'left' | 'right'
  
  /**
   * Loading State
   * 
   * Show Loader when true
   * 
   * Replace icon by loader when true
   * @default false
   */
  isLoading?: boolean
  
  /**
   * Disabled State
   * @default false
   */
  isDisabled?: boolean
  
  /**
   * Additionnal className to personnalize styles
   */
  className?: string
}
