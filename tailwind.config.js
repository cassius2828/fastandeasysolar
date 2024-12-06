/** @type {import('tailwindcss').Config} */

export default {
  mode: 'jit',
  content: ["./src/**/*.{jsx,js,ts,tsx}", "./index.html"],
  safelist: [
    {
      pattern: /[\w-]+\-\[.*?\]/, // Matches any class with dynamic bracketed values
    },
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-vertical": "linear-gradient(var(--tw-gradient-stops))",
        "gradient-vertical-infocard":
          "linear-gradient(var(--tw-gradient-stops-infocard))",
      },
    },
  },
  plugins: [],
};