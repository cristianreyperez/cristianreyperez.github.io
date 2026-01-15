import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx,pug}',
    './node_modules/primevue/**/*.{vue,js,ts,jsx,tsx,pug}',
  ],

  theme: {
    extend: {
      fontSize: {
        xxs: '10px',
      },

      boxShadow: {
        default: '0 5px 35px 0px rgba(0,0,0,.06)',
        darker: '0 5px 35px 0px rgba(0,0,0,.12)',
      },

      minWidth: {
        465: '465px',
        695: '695px',
      },
    },
  },

  plugins: [],
  darkMode: 'class',
} satisfies Config
