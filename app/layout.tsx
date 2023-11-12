'use client'

import { Container, Providers } from '@/components'
import '@/styles/globals.sass'

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Providers>
    <Container>
      {children}
    </Container>
  </Providers>
)

export default RootLayout
