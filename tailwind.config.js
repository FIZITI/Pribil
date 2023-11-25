/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        'lgl': {'max': '1599px'},
        'ldd': {'max': '1299px'},
        'lmd': {'max': '980px'},
        'mmd': {'min': '980px'},
        'mmp': {'max': '661px'},
        'ssd': {'max': '619px'},
        'kk': {'max': '540px'},
        'sml': {'max': '480px'},
        'stt': {'max': '420px'},
        'sn': {'max': '321px'},
        'snp': {'max': '319px'},
        'mn': {'max': '310px'},
      },
    },
  },
  plugins: [],
}