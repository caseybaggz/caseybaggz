// @flow

import Typography from "typography";

const workFont: string = 'Work Sans';
const family: Array<string> = [workFont, 'Helvetica', 'Arial', 'sans-serif'];

const typography = new Typography({
  baseFontSize: '16px',
  bodyFontFamily: family,
  fontFamily: `${workFont}, Helvetica, Arial, sans-serif`,
  googleFonts: [
    {
      name: workFont,
      styles: ['400', '600']
    }
  ],
  headerFontFamily: family
});

export default typography;
