module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      screens: {
        "3xl": "2000px",
      },
      fontFamily: {
        sans: ["Montserrat", "Helvetica", "Arial", "sans-serif"],
        display: [
          "Diranista-Regular",
          "ui-serif",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif",
        ],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        grey: {
          light: "#efe9e0",
          light2: "#dfddd7",
          pale: "#d9e0e8",
          pinkish: "#d4c7b8",
          pinkish2: "#dccfc6",
          brownish: "#977b62",
        },
        brown: {
          pale: "#a8896c",
          pale2: "#a38a70",
          pale3: "#a28a6f",
        },
        clay: {
          DEFAULT: "#a96b4d",
        },
        mocha: {
          DEFAULT: "#a06e52",
        },
        reddish: {
          DEFAULT: "#c15540",
        },
        charcoal: {
          DEFAULT: "#404342",
        },
        sandstone: {
          DEFAULT: "#c9a077",
        },
      },
      width: {
        "18/12": "150%",
      },
      minWidth: {
        170: "170px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
