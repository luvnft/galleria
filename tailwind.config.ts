import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        Helius: {
          primary: "#E4552E",

          secondary: "#a03b20",

          accent: "#ffaf99",

          neutral: "#4C4C4E",

          "neutral-2": "#5F5F5F",

          "base-100": "#272729",

          info: "#008ce5",

          success: "#84cc16",

          warning: "#fb923c",

          error: "#dc2626",
        },
      },
    ],
  },
};
export default config;