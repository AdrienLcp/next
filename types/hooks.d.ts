import type { IApiError } from '@/types'
import { Task } from '@/utils'

// ================================================== //

// ============= //  API Hook  // ============= //

export interface IUseApiState<T> {
  data?: T
  error?: string
  isLoading: boolean
}

export type Cache<T> = { [url: string]: T }

export type Action<T> =
  | { type: Task.Loading }
  | { type: Task.Success; payload: T }
  | { type: Task.Error; payload: string }
