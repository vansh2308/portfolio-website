/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#05060F",
        navy: "#0D1225",
        sky: "#A8D2FE",
        lgrey: "#B1CAEC",
        dgrey: "#5B6783"
      },
      backgroundImage: {
        lines: "url(/src/assets/lines.png)"
      }
    },
  },
  plugins: [],
}

