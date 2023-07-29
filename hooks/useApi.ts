import { useCallback, useEffect, useState } from 'react'
import { ServerError, isApiError } from '@/utils'
import { ApiErrorMessage } from '@/types'
      
const baseUrl = process.env.BASE_URL || ''
const apiKey = process.env.API_KEY || ''
const token = localStorage.getItem('token') || ''

export const useApi = <T = unknown>(url?: string, init?: RequestInit) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<ApiErrorMessage | null>(null)

  const fetchData = useCallback(async (controller: AbortController) => {
    try {
      setIsLoading(true)

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

      if (response) {
        const data = await response.json() as T
        setData(data)
      }
    } catch (error) {
      console.error(error)

      if (isApiError(error)) {
        setError(error.message)
      } else {
        setError(ServerError.InternalServerError)
      }
    } finally {
      setIsLoading(false)
    }
  }, [url, init])

  useEffect(() => {
    if (!url) {
      return
    }

    const controller = new AbortController()
    fetchData(controller)

    return () => {
      controller.abort()
    }
  }, [url, fetchData])

  return [data, error, isLoading]
}
