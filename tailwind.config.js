/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        steel: {
          50: "#f7f8f9",
          100: "#eef0f2",
          200: "#d5dae0",
          300: "#b0b9c4",
          400: "#8593a3",
          500: "#667588",
          600: "#515d6d",
          700: "#434d5a",
          800: "#3a424c",
          900: "#1f2429",
        },
      },
    },
  },
  plugins: [],
};
