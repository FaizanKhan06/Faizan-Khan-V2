/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryColorLight':'#e2e8f0',
        'primaryColor': '#94a3b8',
        'secondaryColorLight': '#F2613F1a',
        'secondaryColor': '#F2613F',
        'secondaryColorDark': '#481E14',
        'tertiaryColor': '#0C0C0C',
        'headingBackGround':'#531506',
      },
    },
  },
  plugins: [],
}

