/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px'
    },
    extend: {
      colors:{
        primaryGreen: 'hsl(148, 56%, 46%)',
        softRed: 'hsl(0, 94%, 66%)',
      },
      fontFamily: {
        opensans: ["Titillium Web", "sans-serif"],
      },
      fontWeight: {
        light: 200,
        normal: 400,
        semiBold: 600,
        bold: 700,
      },
    },
  },
  plugins: [],
}

