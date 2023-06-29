/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-0": {
      transform: "rotateY(0deg)",
    },
    ".rotate-y-90": {
      transform: "rotateY(90deg)",
    },
  });
});

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "chakra-petch": ["Chakra Petch", "sans-serif"],
        "press-start": ["Press Start 2P", "cursive"],
        belanosima: ["Belanosima", "sans-serif"],
        "lilita-one": ["Lilita One", "cursive"],
      },
    },
  },
  plugins: [rotateY],
};
