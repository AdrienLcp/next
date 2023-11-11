import { ILocaleContext } from '@/types'

export interface IErrorBoundaryProps extends React.PropsWithChildren {
  fallback?: React.ReactNode
}

export interface IErrorBoundaryClassProps extends IErrorBoundaryProps {
  hook: ILocaleContext
}

export interface IErrorBoundaryState {
  hasError: boolean
}
