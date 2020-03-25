import Typography from "typography";

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.5,
  bodyFontFamily: ["Roboto Mono", "Helvetica", "Arial", "sans-seif"],
  fontFamily: '"Nunito", Helvetica, Arial, sans-serif',
  googleFonts: [
    {
      name: "Nunito",
      styles: ["600"]
    },
    {
      name: "Roboto Mono",
      styles: ["400"]
    }
  ],
  headerFontFamily: ["Nunito", "Helvetica", "Arial", "sans-serif"]
});

export default typography;
