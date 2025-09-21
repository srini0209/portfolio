/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enables toggling dark mode via a class
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust if your files are elsewhere
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        muted: "var(--muted)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
