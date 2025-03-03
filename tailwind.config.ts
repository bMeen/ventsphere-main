import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "space-cadet": "#1f253f",
        "rich-black": "#1d3d3a",
        "dark-purple": "#3f1f3a",
        "olive-green": "#b1ad4e",
        "green-yellow": "#eae68b",
        isabelline: "#f7f6f2",
        cultured: "#ebebeb",
        manatee: "#a1a3b0",
        "grey-slate": "#6b7280",
      },
    },
  },
  plugins: [],
};
export default config;
