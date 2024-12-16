/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors:{
        primary:"#f8f6fb",
        secondary:"#452372",
        secondaryOne:"#ffbcb1",
        tertiary:"#272626",
        gray:{
          10:"#eeeeee",
          20:"#a2a2a2",
          30:"#7b7b7b",
          50:"#585858",
          90:"#141414",
        }
,      },
screens:{
  xs:"400px",
  "3xl":"1680px",
  "4xl":"2200px"
}
    },
  },
  plugins: [],
}

