import {
  Libre_Baskerville,
  Noto_Serif_Khmer,
  Noto_Sans,
  Noto_Sans_Khmer,
  Manrope,
} from 'next/font/google'

// add new font for v2
const manrope_init = Manrope({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
})

const libre_init = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-libre',
})

const noto_serif_khmer_init = Noto_Serif_Khmer({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-noto-serif-khmer',
})

const noto_sans_init = Noto_Sans({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-noto-sans',
})

const noto_sans_khmer_init = Noto_Sans_Khmer({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-noto-sans-khmer',
})

export const libre = libre_init.variable
export const noto_serif_khmer = noto_serif_khmer_init.variable
export const noto_sans = noto_sans_init.variable
export const noto_sans_khmer = noto_sans_khmer_init.variable
export const manrope = manrope_init.variable
