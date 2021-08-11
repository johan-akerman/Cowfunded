module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#FFED06",
        //secondary: "#141517",
        secondary: "#000",
        bam: "#98ACFF",
        brownish: "#F1EFE3",
        light: "#FFAAC9",
        star: "#FFC828",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
