import { getServerSession } from 'next-auth'
import { signIn, signOut } from 'next-auth/react'
import { authConfig } from '@/pages/api/auth/[...nextauth]'

export const getAuthSession = async () => await getServerSession(authConfig)

export const getRequiredAuthSession = async () => {
  const session = await getAuthSession()

  if (!session?.user) {
    throw new Error('Session not found')
  }
  
  return session
}

export const login = async (callbackUrl?: string) => {
  await signIn('credentials', { callbackUrl })
}

export const logout = async (callbackUrl?: string) => {
  await signOut({ callbackUrl })
}
