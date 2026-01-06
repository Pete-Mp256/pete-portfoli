/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"], // REQUIRED for dark mode
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
}
