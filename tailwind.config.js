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
      },
      keyframes: {
        gradient: {
          "0%": {backgroundPosition: "0% 50%"},
          "100%": {backgroundPosition: "100% 50%"}
        },
        spotlightLeft: {
          "0%": {transform: "rotate(-50deg)"},
          "50%": {transform: "rotate(-40deg)"},
          "100%": {transform: "rotate(-50deg)"},
        },
        spotlightRight: {
          "0%": {transform: "rotate(48deg)"},
          "50%": {transform: "rotate(42deg)"},
          "100%": {transform: "rotate(48deg)"},
        },
        borderSpin: {
          "100%": {transform: "rotate(-360deg)"}
        }
      },
      animation: {
        gradient: "gradient 3s linear infinite",
        splotlightLeft: "spotlightLeft 5s linear infinite",
        splotlightRight: "spotlightRight 7s linear infinite",
        borderSpin: "borderSpin 7s linear infinite" 
      }
    },
  },
  plugins: [],
}

