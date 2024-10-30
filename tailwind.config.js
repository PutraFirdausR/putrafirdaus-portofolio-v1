/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Lora: ["Lora", "sans-serif"],
      },
      screens: {
        "2xl": "1320px",
      },

      keyframes: {
        typing: {
          from: {
            width: "0%",
            visibility: "hidden",
          },
          to: {
            width: "100%",
            visibility: "visible",
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["black", "winter"],
  },
};
