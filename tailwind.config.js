/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['ProximaSoft', 'sans-serif'],
    },
    colors: {
      "dark-blue": "#154489",
      blue: "#3e6c93",
      "light-blue": "#a0b1dc",
      "dark-green": "#0a9348",
      green: "#62a04c",
      "light-green": "#92cfa8",
      mint: "#E8FFF0",
      "dark-yellow": "#fded22",
      yellow: "#ffeb84",
      "light-yellow": "#f9e697",
      "dark-red": "#e02128",
      red: "#da5143",
      "light-red": "#f16863",
      "dark-purple": "#662e8e",
      purple: "#9e72be",
      "light-purple": "#bd8abd",
      "dark-pink": "#c51d5b",
      pink: "#ea195c",
      "light-pink": "#f26c97",
      "dark-gray": "#2e2e2e",
      gray: "#484848",
      "light-gray": "#838486",
      "dark-orange": "#d0770e",
      orange: "#f17e27",
      "light-orange": "#f1bd7e",
      "dark-brown": "#a87b51",
      brown: "#c2976d",
      "light-brown": "#ddc4a7",
      black: "#181818",
      white: "#fcfdfe",
    },
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        scaleFadeIn: {
          "0%": { transform: "scale(1.5)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s forwards",
        scaleFadeIn: "scaleFadeIn 1s forwards",
      },
    },
  },
  plugins: [],
};
