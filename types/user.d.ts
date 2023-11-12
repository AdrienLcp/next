import type { Session } from 'next-auth'

export type User = NonNullable<Session['user']>
