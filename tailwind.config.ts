import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        brand: {
          pink: "#e61f93",
          blue: "#38b6ff",
          yellow: "#ffeb99",
          dark: "#403e3f",
          gray: "#a1a8af",
          surface: "#f8f8f8",
        },
      },
    },
  },
  plugins: [],
};

export default config;
