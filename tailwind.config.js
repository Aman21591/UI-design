const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        GalanoGrotesque: ["Galano Grotesque", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: { blue: "#146EB4" },
      },
    },
  },
  plugins: [],
};
