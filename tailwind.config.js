/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': 'hsl(229, 31%, 21%)',
        'grayish-blue': 'hsl(229, 8%, 60%)',
        'soft-blue': 'hsl(231, 69%, 60%)',
        'soft-red': 'hsl(0, 94%, 66%)',
      },
    },
    // borderRadius: {
    //   DEFAULT: '5px',
    // }
    // screens: {
    //   'desktop': '1440px',
    // },
  },
  plugins: [],
}