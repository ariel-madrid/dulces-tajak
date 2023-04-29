/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage:{'cover':"url('./src/assets/TAJAK.png')"},
    extend: {
      colors:{
        'beige-claro':'#f5f5dc',
        'beige-medio':'#e0cca6'
      }
    },
  },
  plugins: [],
}