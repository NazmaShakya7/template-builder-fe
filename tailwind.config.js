/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        "primary": "#160042",
        "blackText": "#1C1C1C",
        "formText":"#A4A4A4",
        "formBorder":"#E5E5E5",
        "primaryBorder":"#E8E5EC",
        "primaryLight":"#8B80A0"
      }
    },
  },
  plugins: [],
}

