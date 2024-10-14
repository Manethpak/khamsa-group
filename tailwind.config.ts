import { Khmer } from 'next/font/google'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    //add for component v2
    './src/component-v2/**/*.{js,ts,jsx,tsx,mdx}',
    './src/component/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        deepGreen: '#084D36',
        'dark-green': {
          DEFAULT: '#084D36',
        },
        primary: '#8ACEC0',
        secondary: '#19154E',
        polar: '#E6F9FA',
        gray: '#5b5e76',
        secondPrimary: '#1BAB92',
      },
      fontFamily: {
        noto: ['var(--font-noto-sans)'],
        libre: ['var(--font-libre)'],
        'serif-khmer': ['var(--font-noto-serif-khmer)'],
        manrope: ['var(--font-manrope)'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
