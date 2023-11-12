import { LoginButton, TextField } from '@/components'
import { LogoutButton } from '@/components/auth/LogoutButton'
import { getAuthSession } from '@/utils'

const HomePage: React.FC = async () => {
  const session = await getAuthSession()
  
  console.log(session)
  return (
    <div>
      {session
        ? (
          <>
            <TextField placeholder={session.user.name || ''} />
            <LogoutButton />
          </>
        )
        : <LoginButton />
      }
    </div>
  )
}

export default HomePage
