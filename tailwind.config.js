/** @type {import('tailwindcss').Config} */

export default {
  mode: "jit",
  content: ["./src/**/*.{jsx,js,ts,tsx}", "./index.html"],
  safelist: [
    "-right-[140rem]",
    "-top-[110rem]",
    "animate-[spin_30s_linear_infinite]", // Matches any class with dynamic bracketed values
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-vertical": "linear-gradient(var(--tw-gradient-stops))",
        "gradient-vertical-infocard":
          "linear-gradient(var(--tw-gradient-stops-infocard))",
      },
      animation:{
        'slow-spin':'spin 30s linear infinite'
      }
    
    },
  },
  plugins: [],
};
