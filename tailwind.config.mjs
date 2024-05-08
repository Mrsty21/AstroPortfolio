/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#064663",
        secondary: "#ECB365",
        tertiary: "#BDD5EA",
        alt: "#F7F7FF",
      },
    },
  },
  plugins: [],
};
