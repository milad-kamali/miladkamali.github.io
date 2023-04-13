/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito'],
      },
      colors: {
          primary: '#122239'
      },
      screens: {
          '2xl': { 'min': '1536px' },
          'xl': { 'min': '1280px' },
          'lg': { 'min': '1024px' },
          'md': { 'min': '768px' },
          'sm': { 'min': '200px' }
      }
    }
  },
  plugins: []
}
