import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '10px',
      },
      colors: {
        'dark': '#1E1E1E',
        'text-light': '#00000080',
        'green-state': '#1EA97C',
        'red-state': '#EF4444',
        'blue-state': '#3B82F6',
        'gray-trans': '#E7E7E733',
        'border-gray': '#E7E7E7',
        'btn-gray-bg': '#E4E7EB',
        'comment-bg': '#F7F8FA',
        'bg-amber': '#F59E0B',
        'custom-green': '#0FA858',
        'custom-pink': '#FF81E3',
        'assets-gray': '#88878B',
        'dark-gray': '#4A4459',
        'royal-purple': '#6750A414'
      },
      boxShadow: {
        'default': '0 5px 35px 0px rgba(0,0,0,.06)',
        'darker': '0 5px 35px 0px rgba(0,0,0,.12)',
      },
      minWidth: {
        '465': '465px',
        '695': '695px'
      }
    },
  },
  plugins: [],
  darkMode: 'class'
} satisfies Config