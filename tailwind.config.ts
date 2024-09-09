import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#05254B',
        'header-color': '#010B17'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        '32px': '32px',
        '20px': '20px',
        '40px': '40px',
        '24px': '24px'
      },
      fontWeight: {
        '500': '500',
        '600': '600',
        '700': '700'
      },
      lineHeight: {
        '48px': '48px',
        '36px': '36px'
      },
      spacing: {
        '247': '247px',
        '64': '64px',
        '182': '182px',
        '795': '795px',
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }

        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }

        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
export default config;
