/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-sarif"],
      }
    },
    screens: {
      "xs": "320px",
      "sm": "425px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1440px",
      "2xl": "2560px"
    }
  },
  plugins: [],
}

