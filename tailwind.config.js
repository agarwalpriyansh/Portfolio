/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-hover': '#fcf4ff',
        'dark-hover': '#2a004a',
        'dark-theme': '#11001F',
      },
      fontFamily: {
        outfit: ['var(--font-outfit)', 'sans-serif'],
        ovo: ['var(--font-ovo)', 'serif'],
      },
      spacing: {
        'custom': '2.5rem',
      },
    },
  },
  plugins: [],
} 