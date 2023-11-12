import { createUser } from '@/actions'
import { getAllUsers } from '@/actions/user/getAll'
import { LoginButton, LogoutButton, TextField } from '@/components'
import { getAuthSession } from '@/utils'
import { revalidatePath } from 'next/cache'

const HomePage: React.FC = async () => {
  const session = await getAuthSession()
  
  const result = await getAllUsers()

  const test = async () => {
    revalidatePath('/')
  } 

  return (
    <div>
      {session
        ? (
          <>
            <TextField placeholder={session.user.name || ''} />
            {/* if error : montrer un composant erreur ? Comment faire sans useState ? */}
            {console.log('server')}
            <LogoutButton />
          </>
        )
        : <LoginButton />
      }
    </div>
  )
}

export default HomePage
