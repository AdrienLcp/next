'use client'
import { useCallback, useEffect, useReducer, useRef } from 'react'

import type { Cache, IUseApiState } from '@/types'
import { API_ERROR_MESSAGES, getLocalStorageItem, isError } from '@/utils'
import { fetchReducer } from '@/reducers'

export const useApi = <T = unknown>(url?: string, init?: RequestInit): IUseApiState<T> => {
  const cache = useRef<Cache<T>>({})
  const cancelRequest = useRef<boolean>(false)
      
  const baseUrl = process.env.BASE_URL || ''
  const apiKey = process.env.API_KEY || ''
  const token = getLocalStorageItem<string>('token') || ''

  const initialState: IUseApiState<T> = {
    data: undefined,
    error: undefined,
    isLoading: false
  }
  const [state, dispatch] = useReducer(fetchReducer, initialState)

  const fetchData = useCallback(async (url: string, controller: AbortController) => {
    try {
      dispatch({ type: 'loading' })

      const signal = controller.signal
      const headers = init?.headers || {}

      const response = await fetch(`${baseUrl}${url}`, {
        ...init,
        signal,
        headers: {
          ...headers,
          'key': apiKey,
          'token': token
        }
      })
      
      if (cancelRequest.current) return

      if (response) {
        const data = await response.json() as T

        cache.current[url] = data
        if (cancelRequest.current) return
        
        dispatch({ type: 'success', payload: data })
      }
    } catch (error) {
      console.error(error)

      dispatch({
        type: 'error',
        payload: isError(error)
          ? error.message
          : API_ERROR_MESSAGES.SERVER.INTERNAL_SERVER_ERROR
      })
    }
  }, [apiKey, baseUrl, init, token])

  useEffect(() => {
    if (!url) {
      return
    }

    cancelRequest.current = false

    if (cache.current[url]) {
      dispatch({ type: 'success', payload: cache.current[url] })
      return
    }

    const controller = new AbortController()
    fetchData(url, controller)

    return () => {
      cancelRequest.current = true
      controller.abort()
    }
  }, [url, fetchData])

  return state as IUseApiState<T>
}
