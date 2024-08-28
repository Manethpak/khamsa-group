import { Khmer } from 'next/font/google'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
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
        primary: '#8ACEC0',
        secondary: '#19154E',
        polar: '#E6F9FA',
        gray: '#5b5e76',
      },
      fontFamily: {
        lato: ['var(--font-lato)'],
        libre: ['var(--font-libre)'],
        'serif-khmer': ['var(--font-noto-serif-khmer)'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
