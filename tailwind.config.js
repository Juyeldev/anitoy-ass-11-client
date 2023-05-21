/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-navy': '#0C134F', // Add a custom background color
        'custom-blue': '#1D267D', // Add another custom background color 
        'custom-purple': '#5C469C', // Add another custom background color 
        'custom-purple2': '#D4ADFC', // Add another custom background color 
      },
    },
  },
  plugins: [require("daisyui")],
}

