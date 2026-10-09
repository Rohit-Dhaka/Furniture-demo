/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "3rem",
      },

      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },

    extend: {
      /* ================================
         FONTS
      ================================= */

      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },

      /* ================================
         COLORS
      ================================= */

      colors: {
        primary: {
          50: "#F8F5F0",
          100: "#EFE8DE",
          200: "#E2D4C2",
          300: "#D1B99C",
          400: "#B99A78",
          500: "#9B7955",
          600: "#7D5F40",
          700: "#60472F",
          800: "#463421",
          900: "#2D2116",
        },

        secondary: {
          50: "#FAF9F7",
          100: "#F3F1ED",
          200: "#E5E1DA",
          300: "#D3CEC4",
          400: "#B5AEA2",
          500: "#91897D",
          600: "#716A60",
          700: "#565149",
          800: "#393631",
          900: "#24221F",
        },

        background: "#FAF9F7",

        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#F5F2ED",
          dark: "#24221F",
        },

        text: {
          DEFAULT: "#24221F",
          muted: "#716A60",
          light: "#91897D",
          white: "#FFFFFF",
        },

        border: {
          DEFAULT: "#E5E1DA",
          dark: "#D3CEC4",
        },

        black: "#000000",
        white: "#FFFFFF",
      },

      /* ================================
         SHADOWS
      ================================= */

      boxShadow: {
        soft: "0 4px 20px rgba(45, 33, 22, 0.06)",
        card: "0 10px 40px rgba(45, 33, 22, 0.08)",
        hover: "0 15px 45px rgba(45, 33, 22, 0.12)",
      },

      /* ================================
         BORDER RADIUS
      ================================= */

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },

      /* ================================
         SPACING
      ================================= */

      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
      },

      /* ================================
         MAX WIDTH
      ================================= */

      maxWidth: {
        "8xl": "1440px",
        "9xl": "1600px",
      },

      /* ================================
         TRANSITIONS
      ================================= */

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },

  plugins: [],
};