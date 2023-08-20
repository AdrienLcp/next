'use client'

import type { IComboboxOption } from '@/components/forms/Combobox/ComboboxTypes'

import { useState } from 'react'

import { Button, Combobox, DatePicker, Switch, TextField, Toast, Tabs, AlertModal, Pagination, ContextMenu } from '@/components'
import { Loader, LockIcon, UserIcon } from '@/icons'
import { Locales } from '@/utils'
import { useLocale, useTheme } from '@/hooks'

interface HomeProps {
  url?: string
}

const HomePage: React.FC<HomeProps> = ({ url }) => {
  const [pseudo, setPseudo] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)
  const [date, setDate] = useState<Date>(new Date())

  const { changeDarkMode, isDarkModeActive } = useTheme()
  const { changeLocale, getString } = useLocale()

  const handleSubmit = (event: any) => {
    event.preventDefault()
    console.log(event)
  }

  const options = [
    {
      key: "Key 1",
      value: "Banane",
      icon: <UserIcon />
    },
    {
      key: "Key 2",
      value: "Ananas",
      icon: <UserIcon />
    },
    {
      key: "Key 3",
      value: "Pomme",
      icon: <UserIcon />
    },
    {
      key: "Key 4",
      value: "Chorizo",
      icon: <UserIcon />
    },
    {
      key: "Key 5",
      value: "Cacahuète",
      icon: <UserIcon />
    },
    {
      key: "Key 6",
      value: "Raclette",
      icon: <UserIcon />
    },
    {
      key: "Key 7",
      value: "Poisson",
      icon: <UserIcon />
    },
    {
      key: "Key 8",
      value: "Cheval",
      icon: <UserIcon />
    },
    {
      key: "Key 9",
      value: "Moisissure",
      icon: <UserIcon />
    },
    {
      key: "Key 10",
      value: "Fromage",
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
        <DatePicker
          onChange={(newDate) => setDate(newDate)}
          label='date test'
          value={date}
        />

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
        
        <Switch
          value={isDarkModeActive}
          tooltip={"BORDEL DE MERde"}
          onChange={(value) => changeDarkMode(value)}
          label='Dark Mode ACTIVE'
        />

        <Combobox
          icon={<UserIcon />}
          onChange={onSelectChange}
          label="Sélection"
          options={options}
          isAlphabeticallySorted
        />

        <TextField
          label='Pseudo'
          icon={<UserIcon />}
          value={pseudo}
          onChange={(event) => setPseudo(event.target.value)}
          onClear={() => setPseudo('')}
          limit={20}
        />

        <TextField
          placeholder='Je fais un test pas très utile mais on sait jamais je pense que ça va bug'
          value={password}
          icon={<LockIcon />}
          label='Mot de passe'
          onChange={(event) => setPassword(event.target.value)}
          isPassword
          error='ERROR ERROR ERRO dmkfnlodfgn^dsù;gf,ls gnsdfplk jdms njslk gjsdkl sj glks jlksf jR'
        />

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


        <p>{getString('actions.cancel')}</p>

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

        <ContextMenu
          actions={[
            {
              onClick: () => console.log('action 1'),
              label: 'Action 1',
              icon: <UserIcon />
            },
            {
              onClick: () => console.log('action 2'),
              label: 'Action 2',
              icon: <UserIcon />
            },
            {
              onClick: () => console.log('action 3'),
              label: 'Action 3',
              icon: <UserIcon />
            }
          ]}
        />

        <Pagination
          totalContentsCount={10}
          maxContentsCountPerPage={3}
          onPageChange={(newPage) => setPage(newPage)}
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

export default HomePage