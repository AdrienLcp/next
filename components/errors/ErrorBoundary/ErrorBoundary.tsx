import React from 'react'
import type { IErrorBoundaryProps, IErrorBoundaryClassProps, IErrorBoundaryState } from './ErrorBoundaryTypes'
import { useLocale } from '@/hooks'
import styles from './ErrorBoundaryStyles.module.sass'

class ErrorBoundaryClass extends React.Component<IErrorBoundaryClassProps, IErrorBoundaryState> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(error, errorInfo.componentStack)
  }

  render() {
    if (this.state.hasError) {
      const { getString } = this.props.hook
      
      return this.props.fallback ?? (
        <div className={styles.wrapper}>
          <section className={styles.container}>
            <h1 className={styles.title}>
              {getString('components.errorBoundary.title')}
            </h1>

            <p className={styles.description}>
              {getString('components.errorBoundary.description')}
            </p>
          </section>
        </div>
      )
    }

    return this.props.children
  }
}

const withLocalesHook = <P extends IErrorBoundaryProps>(Component: React.ComponentType<P & IErrorBoundaryClassProps>) => {
  const WrappedComponent = (props: P) => {
    const localesHook = useLocale()
    return <Component {...props} hook={localesHook} />
  }
  WrappedComponent.displayName = `WithLocalesHook(${Component.displayName || Component.name || 'Component'})`
  return WrappedComponent
}

export const ErrorBoundary = withLocalesHook(ErrorBoundaryClass)
