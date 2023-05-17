/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        "main": "#262b40",
        "secondary": "#f5f8fb",
        "white": {
          default: "#fff",
          20: "rgba(255,255,255,.2)",
          40: "rgba(255,255,255,.4)",
          60: "rgba(255,255,255,.6)",
          80: "rgba(255,255,255,.8)",
        }
      }
    },
  },
  plugins: [],
}

