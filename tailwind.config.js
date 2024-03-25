module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'Arial', 'sans-serif'],
      },

      backgroundImage: {
        fbsBanner: "url(../dist/img/bg3.svg)",
        fbsServices: "url(../dist/img/what-we-offer-bg-scaled.jpg)",
      },

      colors: {
        dark: "#2b2b2b",
        light: "#ffffff",
        primary: "#6a103f",
        clrBg: "#f5f5f5",
      },

      listStyleType: {
        none: "none",
        disc: "disc",
        decimal: "decimal",
        square: "square",
        circle: "circle",
        roman: "upper-roman",
      },
      animation: {
        'gradient': 'Gradient 15s ease forwards',
        'fadeInUp': 'fadeInUp 1s ease-out',
        'slideDown': 'slideDown 0.5s linear',
        'fadeInLeft': 'fadeInLeft 1s ease-out',
        'fadeInRight': 'fadeInRight 1s ease-out',
        'tagAnimation': 'tagAnimation 1s ease-out',
      },

    },
  },
  plugins: [],
}
