import type { IStatus, IStatusContext } from '@/types'
import { createContext, useState } from 'react'

export const StatusContext = createContext<IStatusContext | null>(null)

export const StatusContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [status, setStatus] = useState<IStatus | null>(null)

  return (
    <StatusContext.Provider value={{ status, setStatus }}>
      {children}
    </StatusContext.Provider>
  )
}
