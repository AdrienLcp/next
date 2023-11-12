'use client'

import { Button } from '@/components'
import { login } from '@/utils'

export const LoginButton: React.FC = () => {

  return (
    <Button
      onClick={async () => await login()}
      variant='contained'
    >
      Login
    </Button>
  )
}
