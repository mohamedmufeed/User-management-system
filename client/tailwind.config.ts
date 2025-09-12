import type { Config } from "tailwindcss"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0F0F0F",     // custom background color
        brandGreen: "#00FF7F" // example custom green
      },

    },
  },
  plugins: [],
} satisfies Config
