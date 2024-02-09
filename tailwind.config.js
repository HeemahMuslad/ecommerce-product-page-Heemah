/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
       
         'lg':{"max": '850px'},
         'md':{"max": '640px'},
         'sm':{"max": '450px'},

      },
      height:{sm:"20%", xsm:"3px"},
      width:{xlg:"90%",lg:"80%", md:"60%", half:"40%", sm:"20%", xsm:"25px"},
      colors:{
        dark:"hsl(219, 9%, 45%)",
        light:"hsl(220, 14%, 75%)",
        gray:"hsl(223, 64%, 98%)",
        orange:"hsl(26, 100%, 55%)", pale:"hsl(25, 100%, 94%)"
      }
    },
  },
  plugins: [],
}