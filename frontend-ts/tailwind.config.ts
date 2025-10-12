export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        background: "var(--background)",
        text: "var(--text)",
        card: "var(--card)",
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
      },
    },
  },
};
