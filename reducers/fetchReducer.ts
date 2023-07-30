import type { Action, IUseApiState } from '@/types'
import { Task } from '@/utils'

const fetchReducer = <T>(state: IUseApiState<T>, action: Action<T>): IUseApiState<T> => {
  switch (action.type) {

    case Task.Success:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      }

    case Task.Loading:
      return {
        ...state,
        isLoading: true
      }

    case Task.Error:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }

    default:
      return state
  }
}

export default fetchReducer
