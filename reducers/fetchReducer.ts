import type { Action, IUseApiState } from '@/types'

export const fetchReducer = <T>(state: IUseApiState<T>, action: Action<T>): IUseApiState<T> => {
  switch (action.type) {
    case 'success':
      return {
        ...state,
        data: action.payload,
        isLoading: false
      }

    case 'loading':
      return {
        ...state,
        isLoading: true
      }

    case 'error':
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }

    default:
      return state
  }
}
