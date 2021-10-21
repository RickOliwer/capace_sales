module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
 
    },
  },
  variants: {
    extend: {
      colors: {
        brand: {
          light: "#e9e8e8",
          dark: "#191919",
          second: "#333",
          oranges: "#ff752e",
          red: "red",
        },
      },
    },
  },
  plugins: [],
}
