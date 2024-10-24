/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{jsx,js,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-vertical": "linear-gradient(var(--tw-gradient-stops))",
        "gradient-vertical-infocard":
          "linear-gradient(var(--tw-gradient-stops-infocard))",
      },
      translate: {
        "-2.5": "-0.625rem",
      },
    },
  },
  plugins: [],
  safelist: [{ pattern: /.*/ }],
};
