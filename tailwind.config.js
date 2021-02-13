module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontSize: {
        "7xl": "6.3rem",
        "8xl": "6.6rem",
      },
      colors: {
        dark: "#001528",
        redish: {
          500: "#FF4D5A",
          700: "#ce4049",
        },
      },
    },
  },
  variants: {
    fontSize: ["responsive"],
  },
  plugins: [],
};
