/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          'soft-blue': 'hsl(215, 51%, 70%)',
          'cyan': 'hsl(178, 100%, 50%)',
          'cyan-ligth': 'hsla(178, 100%, 50%,0.3)',
          'very-dark-blue-main-bg': 'hsl(217, 54%, 11%)',
          'very-dark-blue-card-bg': 'hsl(216, 50%, 16%)',
          'very-dark-blue-line': 'hsl(215, 32%, 27%)',
          'white': 'hsl(0, 0%, 100%)',
        },
      },
      fontFamily: {
        'outfit': ["Outfit", 'sans-serif'],
      },
    },
  },
  plugins: [],
}
