/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#fc905a",

          "secondary": "#f9e8b8",

          "accent": "#d66520",

          "neutral": "#2E2239",

          "base-100": "#F5F5F5",

          "info": "#2D93D7",

          "success": "#5FD8AC",

          "warning": "#B88B0F",

          "error": "#FC5E45",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}