module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      inset: {
        "15": "3.75rem",
        "29": "7.5rem",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "6.3rem",
        "8xl": "6.6rem",
      },
      colors: {
        dark: "#001528",
        redish: {
          500: "#FF4D5A",
          700: "#ce4049",
        },
        greenish: "#CEDE43",
      },
    },
  },
  variants: {
    fontSize: ["responsive"],
  },
  plugins: [],
};
