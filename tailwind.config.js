/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { rubik: "Rubik, sans-serif" },
      colors: {
        "p-soft-blue": "hsl(231, 69%, 60%)",
        "p-soft-red": "hsl(0, 94%, 66%)",
        "s-gray-blue": "hsl(229, 8%, 60%)",
        "s-dark-blue": "hsl(229, 31%, 21%)",
      },
    },
  },
  plugins: [],
};
