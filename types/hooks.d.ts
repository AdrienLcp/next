import type { IApiError } from '@/types'

// ================================================== //

// ============= //  API Hook  // ============= //

export interface IUseApiState<T> {
  data?: T
  error?: string
  isLoading: boolean
}

export type Cache<T> = { [url: string]: T }

export type Action<T> =
  | { type: 'loading' }
  | { type: 'success'; payload: T }
  | { type: 'error'; payload: string }
