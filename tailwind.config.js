/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: "#ECF2F8",
        mediumGrey: "#CFCFCF",
        darkGrey: "#48556A",
        purple: "#733FC8",
        lightPurple: "#A775F1",
        black: "#19202D",
      },
    },
    boxShadow: {
      card: "40px 60px 50px -47px rgba(72, 85, 106, 0.247378)",
    },
    backgroundImage: {
      quotes: "url('/images/bg-pattern-quotation.svg')",
    },
    backgroundPosition: {
      quotes: "top right 10%",
    },
    width: {
      main: "min(95%, 70rem)",
    },
  },
  plugins: [],
}
