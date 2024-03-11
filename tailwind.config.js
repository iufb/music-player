/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "350px",
      md: "735px",
      lg: "1024px",
      xl: "1395px",
      "2xl": "1600px",
      "3xl": "1920px",
    },

    extend: {
      gridTemplateColumns: {
        search: "auto 1fr",
        songBar: "20px 80px auto 40px",
        musicPlayerDT: "auto 1fr auto",
        musicPlayerM: "1fr",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "slide-up": "slideup 0.4s ease-in-out",
        "slide-right": "slideright 1s ease-in-out",
      },
      keyframes: {
        slideup: {
          from: { opacity: 0, transform: "translateY(25%)" },
          to: { opacity: 1, transform: "none" },
        },
        slideright: {
          from: { opacity: 0, transform: "translateX(20%)" },
          to: { opacity: 1, transform: "0" },
        },
      },
    },
    colors: {
      trasparent: "rgba(0,0,0,0)",
      white: "#fff",
      gray: {
        400: "#9CA3AF",
        600: "#4b5563",
      },
      slate: "#f1f5f9",
      purpleHeart: "#0101a2",
      black: "#191624",
      screamingGreen: "#00ff7f",
      loaderBorder: "rgba(255, 255, 255, 0.3)",
    },
  },
  plugins: ["@savvywombat/tailwindcss-grid-areas"],
};
