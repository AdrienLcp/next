export interface IModalProps extends React.PropsWithChildren {
  /**
   * Open state
   * 
   * @default false
   */
  isOpen: boolean
  
  /**
   * On close function
   */
  onClose: () => void

  /**
   * Modal heading title
   */
  title?: string

  /**
   * Blocking value
   * User can't close modal by clicking background & close button isn't diplayed if true
   * Don't forget to set a condition somewhere to close modal
   * 
   * @default false
   */
  isBlocking?: boolean

  /**
   * Add personnalized styles to modal
   */
  modalClassName?: string

  /**
   * Add personnalized styles to close button
   */
  closeButtonClassName?: string
}
