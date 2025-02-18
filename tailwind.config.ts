import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange": "hsl(25, 97%, 53%)",
        "white": "hsl(0, 0%, 100%)",
        "lightGrey": "hsl(217, 12%, 63%)",
        "darkBlue": "hsl(213, 19%, 18%)",
        "veryDarkBlue": "hsl(216, 12%, 8%)",
      },
      fontFamily: {
        "overpassReg": ["overpass-reg", "sans-serif"],
        "overpassSemibold": ["overpass-semibold", "sans-serif"],
        "overpassBold": ["overpass-bold", "sans-serif"],
      }
    },
  },
  plugins: [],
} satisfies Config;
