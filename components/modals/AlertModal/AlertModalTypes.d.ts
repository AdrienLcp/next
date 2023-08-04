export interface IAlertModalProps {
  title?: string
  text: string
  isOpen: boolean
  onConfirm: () => void
  onCancel: () => void
}
