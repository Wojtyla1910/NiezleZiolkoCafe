import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'herb-dark': '#2d5016',
        'herb-green': '#6b8e23',
        'herb-light': '#a4ac86',
        'warm-cream': '#faf5f1',
        'warm-beige': '#e8dcc8',
        'warm-brown': '#8b7355',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
