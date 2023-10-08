'use client'

import type { IComboboxOption } from '@/components/forms/Combobox/ComboboxTypes'

import { useRef, useState } from 'react'

import { Button, Combobox, Switch, TextField, Toast, Tabs, AlertModal, Pagination, ContextMenu, DatePicker, DatePickerReact, Input } from '@/components'
import { Loader, LockIcon, UserIcon } from '@/icons'
import { Hue, Locale, Theme, getRandomNumber } from '@/utils'
import { useDocVisibility, useLocale, useStatus, useTheme, useToasts } from '@/hooks'
import { Form } from '@/components/forms/Form/Form'

interface HomeProps {
  url?: string
}

const HomePage: React.FC<HomeProps> = ({ url }) => {
  const [pseudo, setPseudo] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)

  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)

  const { isDarkModeActive, changeHue, changeTheme } = useTheme()
  const { changeLocale, getString } = useLocale()
  const { pushToast } = useToasts()
  const { setStatus } = useStatus()

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
        <TextField
          label='input'
          icon={<UserIcon />}
          onChange={() => {}}
        />
        <Input
          label='input'
        />

        <Form
          
        />
        
        {/* //! refaire TextField, ComboBox et DatePicker avec le nouveau Input */}
        
        <Button
          variant='contained'
          onClick={() => changeTheme(Theme.System)}
        >
          SYSTEM
        </Button>
        
        <Button
          variant='contained'
          onClick={() => changeTheme(Theme.Dark)}
        >
          DARK
        </Button>

        <Button
          variant='contained'
          onClick={() => changeTheme(Theme.Light)}
        >
          LIGHT
        </Button>

        <Button
          variant='outlined'
          onClick={() => changeHue(Hue.Neutral)}
        >
          NEUTRAL
        </Button>
        <Button
          variant='outlined'
          onClick={() => changeHue(Hue.Blue)}
        >
          BLUE
        </Button>
        <Button
          variant='outlined'
          onClick={() => changeHue(Hue.Purple)}
        >
          PURPLE
        </Button>
        <Button
          variant='outlined'
          onClick={() => changeHue(Hue.Red)}
        >
          RED
        </Button>
        <Button
          variant='outlined'
          onClick={() => changeHue(Hue.Green)}
        >
          GREEN
        </Button>
        <Button
          variant='outlined'
          onClick={() => changeHue(Hue.Yellow)}
        >
          YELLOW
        </Button>
        <Button
          variant='outlined'
          onClick={() => changeHue(Hue.Pink)}
        >
          PINK
        </Button>


      </form>
    </main>
  )
}

export default HomePage
