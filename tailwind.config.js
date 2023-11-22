/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        'lgl': {'max': '1599px'},
        'ldd': {'max': '1299px'},
        'lmd': {'max': '980px'},
        'ssd': {'max': '619px'},
        'sml': {'max': '480px'},
      },
    },
  },
  plugins: [],
}