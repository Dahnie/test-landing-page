module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "headerBlue": "#010522",
        "headerGray": "#d2d3d5",
        "footerBgGray": "#e7e7e9",
        "footerTextGray": "#848484",
        "footerBlue": "#383ba4",
      },
      spacing: {
        "1px": "1px",
        "550px": "550px",
        "1000px": "1000px",
      },
      screens: {
        "3xl": "1960px",
        "4xl": "2280px",
        "5xl": "2860px",
      }
    },
  },
  plugins: [],
}