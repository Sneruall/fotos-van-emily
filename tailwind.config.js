module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "Helvetica", "Arial", "sans-serif"],
        display: [
          "Diranista-Regular"
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
