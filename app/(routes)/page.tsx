'use client'

import type { IComboboxOption } from '@/components/forms/Combobox/ComboboxTypes'

import { useRef, useState } from 'react'

import { Button, Combobox, Form, Switch, TextField, Toast, Tabs, AlertModal, Pagination, ContextMenu, DatePicker, Input } from '@/components'
import { Loader, LockIcon, UserIcon } from '@/icons'
import { getRandomNumber, sortByOrder } from '@/utils'
import { useDocVisibility, useLocale, useTheme, useToasts } from '@/hooks'

interface HomeProps {
  url?: string
}

const HomePage: React.FC<HomeProps> = ({ url }) => {
  const [pseudo, setPseudo] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)

  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)

  const { isDarkModeActive, changeHue, changeTheme } = useTheme()
  const { changeLocale, getString } = useLocale()

  const handleSubmit = (event: any) => {
    event.preventDefault()
    console.log(event)
  }

  // throw new Error()

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

  const handleChange = (value: string) => {
    setPseudo(value)
    if (value.length > 5) {
      setError('HOP HOP HOP CEST TROP LONG LA')
    } else {
      setError('')
    }
  }
  
  return (
    <main>
      <Form
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
          label='LEFT & RIGHT ce texte est long'
          icon={<UserIcon color='hsl(var(--muted-foreground))' />}
          value={pseudo}
          onChange={handleChange}
          onClear={() => {}}
          limit={50}
          tooltip={{ text: 'Le pseudo doit contenir entre 3 et 50 caractères, et ne pas contenir de caractère spécial.'}}
        />

        <div style={{ boxShadow: 'var(--shadow)' }}>

          <TextField
            label='RIGHT'
            value={pseudo}
            onChange={handleChange}
            onClear={() => {}}
            limit={50}
          />

        </div>

        
        <Button
          variant='contained'
          onClick={() => changeTheme('system')}
        >
          SYSTEM
        </Button>

        <Button
          variant='contained'
          onClick={() => changeTheme('dark')}
        >
          DARK
        </Button>

        <Button
          variant='contained'
          onClick={() => changeTheme('light')}
        >
          LIGHT
        </Button>

        <Button
          variant='outlined'
          onClick={() => changeHue('neutral')}
        >
          NEUTRAL
        </Button>
        <Button
          variant='outlined'
          onClick={() => changeHue('blue')}
        >
          BLUE
        </Button>
        <Button
          variant='outlined'
          onClick={() => changeHue('purple')}
        >
          PURPLE
        </Button>
        <Button
          variant='outlined'
          onClick={() => changeHue('red')}
        >
          RED
        </Button>
        <Button
          variant='outlined'
          onClick={() => changeHue('green')}
        >
          GREEN
        </Button>
        <Button
          variant='outlined'
          onClick={() => changeHue('yellow')}
        >
          YELLOW
        </Button>
        <Button
          variant='outlined'
          onClick={() => changeHue('pink')}
        >
          PINK
        </Button>

      </Form>
    </main>
  )
}

export default HomePage
