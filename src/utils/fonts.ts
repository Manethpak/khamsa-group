import { Lato, Libre_Baskerville, Noto_Serif_Khmer } from 'next/font/google'

const lato_init = Lato({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-lato',
})

const libre_init = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-libre_baskerville',
})

const noto_serif_khmer_init = Noto_Serif_Khmer({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-noto_serif_khmer',
})

export const lato = lato_init.className
export const libre = libre_init.variable
export const noto_serif_khmer = noto_serif_khmer_init.variable
