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
      // Tailwind 3.3 lacks these steps (added in 3.4)
      opacity: {
        15: "0.15",
        35: "0.35",
        45: "0.45",
        55: "0.55",
        65: "0.65",
        85: "0.85",
      },
      fontFamily: {
        sans: ["Inter", "Roboto", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        heading: ["Poppins", "Inter", "Roboto", "system-ui", "sans-serif"],
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
