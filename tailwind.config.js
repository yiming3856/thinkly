/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue}",
    "./components/**/*.{astro,js,ts}",
    "./layouts/**/*.{astro,js,ts}",
    "./pages/**/*.{astro,js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        accent: "var(--accent)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
