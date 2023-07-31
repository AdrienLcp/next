export interface IToastProps {
  message?: string
  variant?: ToastVariant
  className?: string
  icon?: JSX.Element
}

type ToastVariant = 'success' | 'warning' | 'error' | 'info'
