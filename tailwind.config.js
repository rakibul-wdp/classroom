/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        dk: "0px 0px 8px 0px #ffffff22",
        lt: "0px 0px 8px 0px #0000001a",
      },
      colors: {
        "dark-primary": "#010409",
        "dark-secondary": "#161B22",
        "dark-border-color": "#4a4a4a",
        "light-border-color": "#e6e7eb",
        "light-primary": "#F4F5F8",
        "light-secondary": "#ffff",
        "dark-text": "#ebebeb",
        "text-2": "#8D8D8D",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
