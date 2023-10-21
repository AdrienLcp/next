export interface IStatusProps {
  status: IStatus | null
  setStatus: React.Dispatch<React.SetStateAction<IStatus | null>>
}

export interface IStatus {
  type: 'default' | 'success' | 'warning' | 'error'
  text: string
}
