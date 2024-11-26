/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens : {
      sm : '340px',
      md : '540px',
      lg : '768px',
      xl : '1180px'
    },
    extend: {
      colors : {
        first : '#A02334',
        second : '#000',
        secondLight : '#0c0c0c',
        whitecolor : '#fff',
        blackcolor : '#000',
        graycolor : '#C4C4C450',
        paragrafcolor : '#000000B3'
      }
    },
      container : {
        center : true,
        padding : {
          DEFAULT : '12px',
          md : '24px'
        }
      },
      fontFamily : {
        pop : ["Poppins", "sans-serif"]
      }
  },
  plugins: [],
}