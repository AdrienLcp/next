'use client'
import { NextPage } from 'next'
import type { IComboboxOption } from '@/components/forms/Combobox/ComboboxTypes'
import { useContext, useState } from 'react'
import { Button, CloseButton, Combobox, Modal, Switch, TextField } from '@/components'
import { LocaleContext } from '@/contexts'
import { Loader, LockIcon, UserIcon } from '@/icons'
import { Locales } from '@/utils'
import { CreateUserError } from '@/utils'

interface HomeProps {
  url?: string
}

const Home: React.FC<HomeProps> = ({ url }) => {
  const { changeLocale, getString } = useContext(LocaleContext)
  const [pseudo, setPseudo] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [bool, setBool] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)

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
        Hello World
        <div style={{ display: 'flex', gap: 5 }}>

        <Combobox
          icon={<UserIcon />}
          onChange={onSelectChange}
          label="Sélection"
          options={options}
        />
        <Button
          variant='primary'
          icon={<Loader color='white' />}
          onClick={() => changeLocale(Locales.EN)}
        >
          english
        </Button>
        </div>

        <Switch
          value={bool}
          tooltip={"BORDEL DE MERde"}
          onChange={(value) => setBool(value)}
          label='test'
        />
        <div style={{ display: 'flex', gap: 5 }}>
        <TextField
          label='Pseudo'
          icon={<UserIcon />}
          value={pseudo}
          onChange={onPseudoChange}
          onClear={() => setPseudo('')}
          limit={20}
        />
        <Button
          variant='primary'
          icon={<Loader color='white' />}
          onClick={() => changeLocale(Locales.FR)}
        >
          french
        </Button>
        </div>


        <p>{getString(CreateUserError.UsernameRequired)}</p>

        <TextField
          placeholder='Je fais un test pas très utile mais on sait jamais je pense que ça va bug'
          value={password}
          icon={<LockIcon />}
          label='Mot de passe'
          onChange={onPasswordChange}
          isPassword
          error='ERROR ERROR ERROR'
        />

        <Button
          onClick={() => setIsOpen(true)}
          variant='secondary'
        >
          OPEN MODAL
        </Button>
      </form>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        </Modal>
    </main>
  )
}

export default Home
