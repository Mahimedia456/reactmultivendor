/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#ff9900",
          600: "#e67f00",
          700: "#c96a00",
          800: "#9a4d00",
          900: "#7c3d00",
          950: "#3f1f00",
        },
     amazon: {
  navy: "#131921",
  ink: "#232f3e",
  line: "#d5d9d9",
  soft: "#f3f4f6",
  yellow: "#febd69",
  orange: "#ff9900",
},
        panel: {
          page: "#f5f7fa",
          card: "#ffffff",
          line: "#e5e7eb",
          dark: "#0b0f14",
          darkCard: "#111827",
          darkLine: "#263241",
        },
      },
      boxShadow: {
        card: "0 8px 24px rgba(15, 23, 42, 0.06)",
        soft: "0 12px 32px rgba(15, 23, 42, 0.08)",
        sidebar: "14px 0 38px rgba(3, 7, 18, 0.22)",
      },
      borderRadius: {
        card: "14px",
        soft: "10px",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};