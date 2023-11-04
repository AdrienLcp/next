export interface IModalProps extends React.PropsWithChildren {
  /**
   * Open state
   * 
   * @default false
   */
  isOpen: boolean
  
  /**
   * On close function
   * Modal is blocking if onClose is not defined
   */
  onClose?: () => void

  /**
   * Modal heading title
   */
  title?: string

  /**
   * Add personnalized styles to modal
   */
  modalClassName?: string

  /**
   * Add personnalized styles to close button
   */
  closeButtonClassName?: string
}
