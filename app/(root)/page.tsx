'use client'
import { NextPage } from 'next'
import { useContext, useState } from 'react'
import { Button, Combobox, TextField } from '@/components'
import { LocaleContext } from '@/contexts'
import { Loader, LockIcon, UserIcon } from '@/icons'
import { Locales } from '@/utils'
import { IComboboxOption } from '@/components/forms/Combobox/ComboboxTypes'

const Home: NextPage = () => {
  const { changeLocale } = useContext(LocaleContext)
  const [pseudo, setPseudo] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const onPseudoChange = (event: any) => {
    setPseudo(event.target.value)
  }

  const onPasswordChange = (event: any) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    console.log(event)
  }

  const options = [
    {
      key: "Key 1",
      value: "Choix 1",
      icon: <UserIcon />
    },
    {
      key: "Key 2",
      value: "Choix 2",
      icon: <UserIcon />
    },
    {
      key: "Key 3",
      value: "Choix 3",
      icon: <UserIcon />
    },
    {
      key: "Key 4",
      value: "Choix 4",
      icon: <UserIcon />
    },
    {
      key: "Key 5",
      value: "Choix 5",
      icon: <UserIcon />
    },
    {
      key: "Key 6",
      value: "Choix 6",
      icon: <UserIcon />
    },
    {
      key: "Key 7",
      value: "Choix 7",
      icon: <UserIcon />
    },
    {
      key: "Key 8",
      value: "Choix 8",
      icon: <UserIcon />
    },
    {
      key: "Key 9",
      value: "Choix 9",
      icon: <UserIcon />
    },
    {
      key: "Key 10",
      value: "Choix 10",
      icon: <UserIcon />
    }
  ]

  const onSelectChange = (option: IComboboxOption | null) => {
    console.log(option)
  }

  return (
    <main>
      Hello World
      <Button
        variant='primary'
        icon={<Loader color='white' />}
        onClick={() => changeLocale(Locales.FR)}
      >
        french
      </Button>
      <Button
        variant='primary'
        icon={<Loader color='white' />}
        onClick={() => changeLocale(Locales.EN)}
      >
        english
      </Button>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 30,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
        onSubmit={handleSubmit}
      >
        <Combobox
          icon={<UserIcon />}
          onChange={onSelectChange}
          label="Sélection"
          options={options}
        />
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <TextField
            label='Pseudo'
            icon={<UserIcon />}
            value={pseudo}
            onChange={onPseudoChange}
            onClear={() => setPseudo('')}
            limit={20}
          />
        </div>

        <TextField
          placeholder='Je fais un test pas très utile mais on sait jamais je pense que ça va bug'
          value={password}
          icon={<LockIcon />}
          label='Mot de passe'
          onChange={onPasswordChange}
          isPassword
        />
      </form>
    </main>
  )
}

export default Home
