/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,md,html}"],
  theme: {
    extend: {},
  },
  screens: {
    'mobile': '375px',
    // => @media (min-width: 375px) { ... }

    'sm': '640px',
    // => @media (min-width: 640px) { ... }

    'md': '768px',
    // => @media (min-width: 768px) { ... }

    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }

    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }

    'big': '1680px',
    // => @media (min-width: 1920px) { ... }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
}