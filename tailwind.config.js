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
      backgroundImage: {
        'gradientPrimary': 'linear-gradient(20deg,hsl(181deg 92% 42%) 0%,hsl(179deg 100% 41%) 9%,hsl(177deg 100% 43%) 19%,hsl(176deg 100% 44%) 29%,hsl(174deg 100% 46%) 41%,hsl(171deg 100% 47%) 55%,hsl(169deg 100% 49%) 73%,hsl(167deg 100% 50%) 100%)'
      },
      colors:{
        primaryGreen: 'hsl(164, 71%, 53%)',
        deepGreen: 'hsl(162, 55%, 42%)',
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

