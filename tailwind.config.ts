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
        tal: {
          navy: '#1B2A47',
          offwhite: '#F8F9FA',
          sand: '#E3D5CA',
          sky: '#A9C2DF',
          primary: '#1B2A47',
          accent: '#A9C2DF',
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['var(--font-heebo)', 'sans-serif'],
        serif: ['var(--font-frank-ruhl)', 'serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-rtl'),
  ],
};
export default config;
