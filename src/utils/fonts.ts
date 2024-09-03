import { Lato, Libre_Baskerville, Noto_Serif_Khmer } from 'next/font/google'

const lato_init = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-lato',
})

const libre_init = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-libre',
})

const noto_serif_khmer_init = Noto_Serif_Khmer({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-noto-serif-khmer',
})

export const lato = lato_init.className
export const libre = libre_init.variable
export const noto_serif_khmer = noto_serif_khmer_init.variable
