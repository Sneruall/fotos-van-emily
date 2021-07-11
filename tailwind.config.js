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
          lightest: "#fff",
          light: "#efe9e0",
          DEFAULT: "#dccfc6",
          dark: "#fff",
          darkest: "#b36747",
        },
        grey: {
          darkest: "#2a2c2b",
        },
        blue: {
          greyish: "#d9e0e8",
        },
        brown: {
          DEFAULT: "#a8896c",
        },
      },
      width: {
        "18/12": "150%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
