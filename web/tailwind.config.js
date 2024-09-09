/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex:{
        x2:'-2'
      },
      outlineWidth:{
        3:'3px'
      },
      borderWidth:{
        3:'3px'
      }
    },
  },
  plugins: [],
}
