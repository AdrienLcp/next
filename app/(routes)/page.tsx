import { createUser } from '@/actions'
import { getAllUsers } from '@/actions/user/getAll'
import { LoginButton, LogoutButton, TextField } from '@/components'
import { getAuthSession } from '@/utils'
import React from 'react'

const HomePage: React.FC = async () => {
  const session = await getAuthSession()
  
  const result = await getAllUsers()

  const action = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget 
    const formData = new FormData(form)

    // const result = await createUser(formData)
    
    form.reset()
    form.focus()
  }

  return (
    <div>
      {session
        ? (
          <>
            <TextField placeholder={session.user.name || ''} />
            {/* if error : montrer un composant erreur ? Comment faire sans useState ? */}
            <LogoutButton />
          </>
        )
        : <LoginButton />
      }
    </div>
  )
}

export default HomePage
