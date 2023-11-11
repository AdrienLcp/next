'use client'

import { Container, Providers } from '@/components'

import '@/styles/reset.css'
import '@/styles/colors.sass'
import '@/styles/transitions.sass'
import '@/styles/vars.sass'
import '@/styles/globals.sass'

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Providers>
    <Container>
      {children}
    </Container>
  </Providers>
)

export default RootLayout
