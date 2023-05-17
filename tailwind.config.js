/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      "sm": "480px", //large mobile
      "md": "900px", // tablet
      "lg": "1200px",  // desktop
    },
    colors: {
      "primary": "#F1EFEE",
      "accent": "#C73716",
      "accent-light": "#E75635",
      "black": "#141211",
      "black-75": "#3A3532",
      "black-50": "#837F7C",
      "black-25": "#BBB7B4"
    },
    fontSize: {
      xs: "0.81rem",
      base: "1rem",
      h5: "1.25rem",
      h4: "1.56rem",
      h3: "1.94rem",
      h2: "2.5rem",
      h1: "3rem",

      'xs-sm': "0.88rem",
      'base-sm': "1.13rem",
      'h5-sm': "1.44rem",
      'h4-sm': "1.75rem",
      'h3-sm': "2.19rem",
      'h2-sm': "2.75rem",
      'h1-sm': "3.44rem",

      'xs-md': "0.88rem",
      'base-md': "1.13rem",
      'h5-md': "1.5rem",
      'h4-md': "2rem",
      'h3-md': "2.69rem",
      'h2-md': "3.56rem",
      'h1-md': "4.75rem",

      'xs-lg': "0.94rem",
      'base-lg': "1.31rem",
      'h5-lg': "1.88rem",
      'h4-lg': "2.63rem",
      'h3-lg': "3.75rem",
      'h2-lg': "5.25rem",
      'h1-lg': "7.44rem",
    },
    borderRadius: {
      DEFAULT: "2rem",
      sm: "0.5rem"
    },
    maxWidth: {
      lg: "1158px"
    },

    extend: {
      backgroundImage: {
        

      },
    },
  },
  plugins: [],
}
