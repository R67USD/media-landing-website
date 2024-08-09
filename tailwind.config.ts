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
        "purple-primary": "#5420A4",
        "primary-orange": "#FF4900",
        "custom-gray": "#BBBBBB",
        "text-gray": "#6D6868",
        "custom-overlay": "rgba(84, 32, 164, 0.59)",
      },
      lineHeight: {
        hero: "48.41px",
        about: "42.36px",
        services: "29.3px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        center: true,
        padding: "15px",
      },
    },
  },
  plugins: [],
};
export default config;
