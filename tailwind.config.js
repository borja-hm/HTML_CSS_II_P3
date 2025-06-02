/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"PT Sans Narrow"', '"Segoe UI"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
    },
    fontSize: {
      base: '1rem', // esto reemplaza el valor predeterminado de `text-base`
      sm: '0.875rem',
      lg: '1.225rem',
      xl: '1.35rem',
      
    },
  },
  plugins: [],
}

