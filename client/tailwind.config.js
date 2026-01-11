/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f98e2b",
        secondary: "#f3f3f3",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "3rem",
        },
      },
        keyframes: {
        "whatsapp-blink": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(1.15)", opacity: "0.8" },
        },
      },
      animation: {
        "whatsapp-blink": "whatsapp-blink 1s infinite alternate",
      },
      
    },
  },
  plugins: [],
};
