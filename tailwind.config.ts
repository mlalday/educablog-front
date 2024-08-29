import { redirect } from "next/dist/server/api-utils";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: { 
      sans: ["Verdana", "Arial"]
    },

    colors: {
      background: { 
        500: '#dcc9f2',
        800:'#372065',
        900: '#110a1f'
      },
    fontColor:{
      200: '#110a1f',
      800: 'white',
      900: '#e7e1ee'
    }
  }
  },
  plugins: [],
};

export default config
