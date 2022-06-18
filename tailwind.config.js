module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#C7E1DC",
        primaryLight: "#D4E8E6",
        secondary: "#000",
        bam: "#98ACFF",
        brownish: "#F1EFE3",
        light: "#FFAAC9",
        coral: "#E56F7A",
        star: "#FFC828",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
