'use client'
import type { IComboboxOption } from '@/components/forms/Combobox/ComboboxTypes'
import { useState } from 'react'
import { Button, Combobox, Switch, TextField, Toast, Tabs, AlertModal, Pagination } from '@/components'
import { Loader, LockIcon, UserIcon } from '@/icons'
import { Locales } from '@/utils'
import { useLocale, useTheme } from '@/hooks'

interface HomeProps {
  url?: string
}

const Home: React.FC<HomeProps> = ({ url }) => {
  const { changeLocale, getString } = useLocale()

  const [pseudo, setPseudo] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)

  const { changeDarkMode, isDarkModeActive } = useTheme()

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
        <Tabs
          tabs={[
            {
              label: 'Tab 1',
              icon: <>icon1</>,
              content: <>CONTENT 1</>
            },
            {
              label: 'Tab 2',
              icon: <>icon2</>,
              content: <>CONTENT 2</>
            }
          ]}
        />

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
          value={isDarkModeActive}
          tooltip={"BORDEL DE MERde"}
          onChange={(value) => changeDarkMode(value)}
          label='Dark Mode ACTIVE'
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


        <p>{getString('actions.cancel')}</p>

        <TextField
          placeholder='Je fais un test pas très utile mais on sait jamais je pense que ça va bug'
          value={password}
          icon={<LockIcon />}
          label='Mot de passe'
          onChange={onPasswordChange}
          isPassword
          error='ERROR ERROR ERRO dmkfnlodfgn^dsù;gf,ls gnsdfplk jdms njslk gjsdkl sj glks jlksf jR'
        />

        <div style={{ display: 'flex', gap: 5 }}>
          <Button
            onClick={() => setIsOpen(true)}
            variant='secondary'
          >
            OPEN
          </Button>
          <Button
            onClick={() => setIsOpen(true)}
            variant='primary'
          >
            MODAL
          </Button>
        </div>

        <Pagination
          totalContentsCount={10}
          maxContentsCountPerPage={1}
          onPageChange={(newPage: number) => setPage(newPage)}
          currentPage={page}
        />

      </form>

      <AlertModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={() => {}}
        text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fugiat labore inventore? Eius modi consequatur adipisci quo voluptate consequuntur excepturi, hic porro veritatis incidunt minima quisquam ad officia nostrum deserunt laudantium"}
        title={"Voulez vous vraiment supprimer ce portrait ?"}
      />

      <Toast message={"User created"}/>
    </main>
  )
}

export default Home
