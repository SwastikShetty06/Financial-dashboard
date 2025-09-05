/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // By extending the theme with the default hex-based colors, we ensure
      // that html2canvas can parse them correctly, avoiding the "oklch" error.
      colors: {
        // You can customize these or use the full default palette
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        red: colors.red,
        orange: colors.orange,
        green: colors.emerald, // Using emerald for a nice green shade
        blue: colors.blue,
        yellow: colors.amber,
      },
    },
  },
  plugins: [],
};
