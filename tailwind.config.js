/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        first: "rgb(var(--firstColor))",
        second: "rgb(var(--secondColor))",
        third: "rgb(var(--thirdColor))",
        fourth: "rgb(var(--fourthColor))",
        fifth: "rgb(var(--fifthColor))",
        sixth: "rgb(var(--sixthColor))",
        seventh: "rgb(var(--seventhColor))",
        eight: "rgb(var(--eightColor))",
      },
    }
  },
  plugins: [],
}


  