/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./src/**/*.{html,js,ts,tsx}"],  
  theme: {
    extend: {
      colors:{
        SoftCyan :'hsl(174, 77%, 80%)',
        StrongCyan:'hsl(174, 86%, 45%)',
        LightGrayishRed:'hsl(14, 92%, 95%)',
        LightRed:'hsl(15, 100%, 70%)',
        PaleBlue: 'hsl(226, 100%, 87%)',
        White:'hsl(0, 0%, 100%)',
        VeryPaleBlue :'hsl(230, 100%, 99%)',
        LightGrayishBlue1:'hsl(224, 65%, 95%)',
        LightGrayishBlue2:'hsl(223, 50%, 87%)',
        GrayishBlue:'hsl(225, 20%, 60%)',
        DarkDesaturatedBlue:'hsl(227, 35%, 25%)',
      },
      fontWeight:{
        600:'600',
        800:'800',
      }      
    },
  },
  plugins: [],
};
