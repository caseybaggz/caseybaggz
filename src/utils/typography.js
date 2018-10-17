import Typography from "typography";

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.5,
  bodyFontFamily: ["Open Sans", "Helvetica", "Arial", "sans-seif"],
  fontFamily: '"Poppins", Helvetica, Arial, sans-serif',
  googleFonts: [
    {
      name: "Poppins",
      styles: ["600"]
    },
    {
      name: "Open Sans",
      styles: ["400"]
    }
  ],
  headerFontFamily: ["Poppins", "Helvetica", "Arial", "sans-serif"]
});

export default typography;
