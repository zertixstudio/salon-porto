/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F7F4EC",
        "cream-dim": "#EFEADD",
        charcoal: "#16140F",
        "charcoal-soft": "#211E17",
        gold: "#A9895C",
        "gold-bright": "#C7A579",
        ink: "#2A2620",
        line: "#DCD5C4",
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.3em",
      },
    },
  },
  plugins: [],
};
