module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {

      keyframes: {
        'tagAnimation': {
          '0%': { 
            'opacity': '0', 'transform': 'translateY(20px)'
          },
          '100%': { 
            'opacity': '1', 'transform': 'translateY(0px)'
          },
        },

        'fadeInUp': {
          '0%': {
            'opacity': '0',
            'transform': 'translate3d(0, 100%, 0)'
          },
          '100%': {
            'opacity': '1',
            'transform': 'translate3d(0, 0, 0)'
          },
        },

        'fadeInLeft': {
          '0%': {
            'opacity': '0',
            'transform': 'translate3d(-100%, 0, 0)'
          },
          '100%': {
            'opacity': '1',
            'transform': 'translate3d(0, 0, 0)'
          },
        },

        'fadeInRight': {
          '0%': {
            'opacity': '0',
            'transform': 'translate3d(100%, 0, 0)'
          },
          '100%': {
            'opacity': '1',
            'transform': 'translate3d(0, 0, 0)'
          }
        },
        
        // 'gradient': {
        //   '0%': {
        //     'background-position': '(25%, 0%)'
        //   },
        //   '100%': {
        //     'background-position': '(40%, 80%)'
        //   },
        // },


      },

      fontFamily: {
        'montserrat': ['Montserrat', 'Arial', 'sans-serif'],
      },

      backgroundSize: {
        'custom-size': '400% 400%',
      },

      backgroundImage: {
        fbsBanner: "url(../dist/img/bg3.svg)",
        fbsServices: "url(../dist/img/what-we-offer-bg-scaled.jpg)",
        bgCta: "radial-gradient(circle farthest-side at center bottom,#e81a86,#6a103f 125%)",
      },

      colors: {
        dark: "#2b2b2b",
        light: "#ffffff",
        primary: "#6a103f",
        clrBg: "#f5f5f5",
        lightPrimary: "#be2a76",
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
        'tagAnimation': 'tagAnimation 0.3s linear',
      },

    },
  },
  plugins: [],
}
