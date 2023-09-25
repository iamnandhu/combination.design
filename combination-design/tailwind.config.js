/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'background': '#FEFEFE',
      }
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '8': '8px',
      '9':' 9px',
      '10': '10px',
      '11': '11px',
      '12': '12px',
      '13': '13px',
      '14': '14px',
      '15': '15px',
      '16': '16px',
      '24': '24px',
      '26': '26px',
      '12': '12px',
      '13': '13px',
      '15': '15px',
      '16': '16px',
      '18': '18px',
      '32': '32px',
      '20': '20px',
      '22': '22px',
    },
    fontFamily: {
      'Inter': ['Inter'],
      'Poppins': ['Poppins'],
    }
  },
  plugins: [],
}

