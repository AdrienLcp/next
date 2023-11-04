import { Lustria, Sunflower } from 'next/font/google'

export const headingFont = Lustria({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-heading'
})

export const bodyFont = Sunflower({
  subsets: ['latin'],
  weight: ['300', '500', '700'],
  variable: '--font-body'
})
