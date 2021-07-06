module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
          darkest: "#404342",
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
