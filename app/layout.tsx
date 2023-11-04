'use client'

import '@/styles/reset.css'
import '@/styles/themes.sass'
import '@/styles/transitions.sass'
import '@/styles/vars.sass'
import '@/styles/globals.sass'

import { Container, Providers } from '@/components'

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Providers>
    <Container>
      {children}
    </Container>
  </Providers>
)

export default RootLayout
