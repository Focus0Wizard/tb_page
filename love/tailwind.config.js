/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          pink: "#FDF2F8", 
          rose: "#FBCFE8", 
          blue: "#EFF6FF", 
          gray: "#F3F4F6", 
          text: "#374151", 
        }
      },
    },
  },
  plugins: [],
};