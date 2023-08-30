const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        default: "#000",
        primary: "#2dd4bf",
        secondary: "rgba(34, 197, 94, 1)",
      },
    },
    keyframes: {
      sliding: {
        "100%": { transform: "translateX(0)" },
        "0%": { transform: "translateX(100%)" },
      },
      spin: {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
      },

      bounce: {
        "0%, 100%": {
          transform: "translateY(0)",
          animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
        },
        "50%": {
          transform: "translateY(-8px)",
          animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
        },
      },
    },

    animation: {
      sliding: "sliding .6s linear",
      spin: "spin 1s linear infinite",
      bounce: "bounce 0.8s ease-in-out infinite",
    },
  },
  plugins: [require("@tailwindcss/typography")],
});
