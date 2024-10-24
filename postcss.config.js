import purgecss from "@fullhuman/postcss-purgecss";

const isProduction = process.env.NODE_ENV === "production";

export default {
  plugins: [
    isProduction &&
      purgecss({
        content: [
          "./src/**/*.html",
          "./src/**/*.jsx",
          "./src/**/*.js",
          "./src/index.css", // Add index.css to the content array
        ],

        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      }),
  ].filter(Boolean),
  safelist: ["translate-y-0.5", "-translate-y-0.5",'-translate-y-2.5'],
};
