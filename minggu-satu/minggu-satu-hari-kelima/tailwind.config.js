/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#f082ac',
        secondary: '#f6b6d8',
        dark: '#0f172a',
        slate: '#64748b',
      },
      screens:{
        '2xl': '920px',
        'xl': '760px',
        'md': '540px',
      },
    },
  },
  plugins: [],
}
