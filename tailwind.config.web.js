/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
     
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    './**/*.{html,js}',
    './css/**/*.css',
    './js/**/*.js',
  
  ],
  darkMode: 'class',

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1200px',
      xxl:'2000px',
      base:'1600px'
    },
    colors: {
      'White':'#fff',
      'black':'#000000',
      'primary':'#004B85',
      'secondaryBG':'#E6F7F5',
      'hoverBtnDprimary':'#013c6a',
      'hoverBtlightBlue':'#cfd3d6',
      'lightBlue':'#E6EDF3',
       'textGray':'#494949',
       'blue':'#022A4C',
       'blue2':'#5A96C9',
       'blue3':'#0E4D82',
       'gray':'#555555',
       'bgGray':'#E5E5E5',
       'secondary':'#00A693',
       'red':'#F9461C',
       'redBG':'#FFEDE9',
       'text':'#68737C',
       'gray1':"#3A3A3A",
       'lightBG':'#FAFAFA',
       'mainGray':'#C8CCCF',
       'white1':'#FEFEFE',
       'white':'#ffff',
       'dark':'#252733',
       'dark2':'#1A1C24',
       'placeholder':'#222222',
       'grayMatn':'#A8A8A8',
       'gray':'#6A6A6A',
       'graylight':'#919191',
       'red2':'#FF4A4A'
        
    },

    fontFamily: {
      'Montserrat300': ['Montserrat300', 'Montserrat300'],
      'Montserrat400': ['Montserrat400', 'Montserrat400'],
      'Montserrat500': ['Montserrat500', 'Montserrat500'],
      'Montserrat600': ['Montserrat600', 'Montserrat600'],
      'Montserrat700': ['Montserrat700', 'Montserrat700'],
      'Montserrat800': ['Montserrat800', 'Montserrat800'],
      'Montserrat900': ['Montserrat900', 'Montserrat900'],
      'OpenSans300': ['OpenSans300', 'OpenSans300'],
      'OpenSans400': ['OpenSans400', 'OpenSans400'],
      'OpenSans500': ['OpenSans500', 'OpenSans500'],
      'OpenSans600': ['OpenSans600', 'OpenSans600'],
      'OpenSans700': ['OpenSans700', 'OpenSans700'],
      'OpenSans800': ['OpenSans800', 'OpenSans800'],
      'OpenSans900': ['OpenSans900', 'OpenSans900'], 
      'KozGoPr6N400': ['KozGoPr6N400', 'KozGoPr6N400'], 
      'MyriadArabic300': ['MyriadArabic300', 'MyriadArabic300'], 
      'MyriadArabic400': ['MyriadArabic400', 'MyriadArabic400'], 
      'MyriadArabic800': ['MyriadArabic800', 'MyriadArabic800'], 
      'Saint400': ['Saint400', 'Saint400'], 
      
      

    

    },
    extend: {
      
      content:{
  'content1':' '
      },
      lineHeight: {
        '18.78': '18.78px',
        '64': '64px',
        '23':'23px',
        '25.4':'25.04px',
        '57.97':'57.97px',
        '17.96': '17.96px',
        '21.91': '21.91px',
        '32.03':'32.03px',
        '56.35':'56.35px',
        '25.04':'25.04px',
        '37.97':'37.97px',
        '37.57':'37.57px',
        '32.01':'32.01px',
        '31.03':'31.03px',
        '28.17':'28.17px',
        '18.78':'18.78px',
         '20.25':'20.25px',
         '24':'24px',
         '46.96':'46.96px',
         '16.41':'16.41px',
         '14.06':'14.06px',
         '18.75':'18.75px',
         '31':'31px',
         '43.4':'43.4px',
         '17.05':'17.05px',
         '21':'21px',
         '24.18':'24.18px',
         '27.09':'27.09px',
         '20.15':'20.15px',
         '35':'35px',
         '28':'28px',
         '41':'41px',
         '55':'55px',
         '48':'48px',
         '32':'32px',
         '40.96':'40.96px',
         '17.07':'17.07px',
         '14.06':'14.06px',
         '58.51':'58.51px',
         '19.5':'19.5px',
         '19.8':'19.8px',
         '21.94':'21.94px',
         '15.85':'15.85px',
         '17.07':'17.07px',
         '18.29':'18.29px',
         '14.86':'14.86px',
         '20.43':'20.43px',
         '35.87':'35.87px',
       

      },

      width:{
        '85p':'85%',
        '90p':'90%',
        '80p':'80%',
        '95p':'95%',

        '95p':'95%',
      },
      height:{
        '85p':'85%',
        '90p':'90%',
        '80p':'80%',
        '95p':'95%',
        '70p':'70%',
        '75p':'75%',
        '60p':'60%',
      },
      maxWidth: {
        'x100': '100%',
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',

      },
      borderRadius:{
       '5':'5px'
      }
    },
    translate: {
      '100': '-100%',
    }
  },
  
  
}