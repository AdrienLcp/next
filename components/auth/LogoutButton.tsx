'use client'

import { Button } from '@/components'
import { logout } from '@/utils'

export const LogoutButton: React.FC = () => {

  return (
    <Button
      onClick={async () => await logout()}
      variant='outlined'
    >
      Logout
    </Button>
  )
}
