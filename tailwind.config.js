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
        pink: {
          lightest: "#fff8ef",
          light: "#efe9e0",
          DEFAULT: "#dccfc6",
          dark: "#fff",
          darkest: "#b36747",
        },
        grey: {
          darkest: "#2a2c2b",
          dark: "#7e817f",
        },
        blue: {
          greyish: "#d9e0e8",
        },
        brown: {
          DEFAULT: "#a28a6f",
          light: "#dfddd7",
          dark: "#a96b4d",
        },
      },
      width: {
        "18/12": "150%",
      },
      minWidth: {
        '170': "170px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
