import type { IModalProps } from '../Modal/ModalTypes'

export interface IAlertModalProps extends IModalProps {
  text: string
  onConfirm: () => void
}
