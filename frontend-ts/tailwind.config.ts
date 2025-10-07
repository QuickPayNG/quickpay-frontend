export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        background: "var(--background)",
        text: "var(--text)",
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
      },
    },
  },
};
