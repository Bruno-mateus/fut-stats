/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
         'home-background':"url('./assets/home-background.jpg')"
       }  
    },
  },
  plugins: [],
}