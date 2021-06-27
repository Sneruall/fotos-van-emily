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
        transparent: 'transparent',
        current: 'currentColor',
        pink: {
          lightest: '#f9fafc',
          light: '#ff7ce5',
          DEFAULT: '#dccfc6',
          dark: '#ff16d1',
          darkest: '#b36747',
        },
      }
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
};
