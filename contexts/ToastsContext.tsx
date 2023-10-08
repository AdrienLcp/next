import type { IToast, IToastBuilt, IToastsContext } from '@/types'

import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const ToastsContext = createContext<IToastsContext | null>(null)

export const ToastsContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [toasts, setToasts] = useState<IToastBuilt[]>([])

  const pushToast = (newToast: IToast) => {
    const toastToCreate: IToastBuilt = {
      ...newToast,
      type: newToast.type || 'default',
      duration: newToast.duration || 5000,
      id: uuidv4()
    }

    setToasts(prev => [...prev, toastToCreate])
  }

  const deleteToast = (toastId: string) => {
    const toastToDelete = toasts.find(toast => toast.id === toastId)

    if (toastToDelete) {
      setToasts(prev => prev.filter(toast => toast.id !== toastToDelete.id))
    }
  }

  return (
    <ToastsContext.Provider value={{ toasts, pushToast, deleteToast }}>
      {children}
    </ToastsContext.Provider>
  )
}
