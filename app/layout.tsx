'use client'
import '@/styles/globals.sass'
import '@/styles/reset.css'
import type { Metadata } from 'next'
import { ThemeContextProvider, LocaleContextProvider } from '@/contexts'
import { Container } from '@/components'

export const metadata: Metadata = {
  title: 'Admin',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LocaleContextProvider>
      <ThemeContextProvider>
        <Container>
          {children}
        </Container>
      </ThemeContextProvider>
    </LocaleContextProvider>
  )
}
