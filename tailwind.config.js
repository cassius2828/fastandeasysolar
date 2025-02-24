/** @type {import('tailwindcss').Config} */

export default {
  mode: "jit",
  content: ["./src/**/*.{jsx,js,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-vertical": "linear-gradient(var(--tw-gradient-stops))",
        "gradient-vertical-infocard":
          "linear-gradient(var(--tw-gradient-stops-infocard))",
      },
      backgroundColor: {
        deepblue: "#0b4bb3",
      },
      animation: {
        "slow-spin": "spin 30s linear infinite",
      },
      minHeight: {
        "500px": "500px",
      },
      height: {
        "500px": "500px",
        "300px": "300px",
      },
      maxWidth: {
        "1400px": "1400px",
        "1200px": "1200px",
        "700px": "700px",
      },
      boxShadowColor: {
        deepblue: "#0b4bb3",
      },
      textColor: {
        deepblue: "#0b4bb3",
      },
      lineHeight: {
        "leading-3rem": "30px",
      },
    },
  },
  plugins: [],
};
