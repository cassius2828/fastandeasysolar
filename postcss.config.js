import purgecss from "@fullhuman/postcss-purgecss";

const isProduction = process.env.NODE_ENV === 'production';

export default {
  plugins: [
    isProduction &&
      purgecss({
        content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"], // Adjust based on your file structure
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: [
          'col-span-2',
          'flex',
          'flex-row',
          'gap-12',
          'h-',
          'hidden',
          'mb-0',
          'ml-0',
          'ml-40',
          'mr-0',
          'mr-12',
          'mr-8',
          'mt-0',
          'mt-48',
          'pl-20',
          'pr-40',
          'text-2xl',
          'text-3xl',
          'text-4xl',
          'text-6xl',
          'text-8xl',
          'top-56',
          'w-1/2',
          'w-1/3',
          'w-9/12',
          'w-full',
        ],
      }),
  ].filter(Boolean),
};