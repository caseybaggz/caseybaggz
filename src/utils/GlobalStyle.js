// @flow

import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    color: ${props => props.theme.darkText};
    font-size: 100%;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
  }

  html,
  body {
    min-width: 360px;
  }

  body {
    background-color: ${props => props.theme.white};
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  svg {
    line-height: 0;
  }

  ::-moz-selection {
    color: ${props => props.theme.darkText};
    background: ${props => props.theme.green3}
  }
  ::selection {
    color: ${props => props.theme.darkText};
    background: ${props => props.theme.green3}
  }
`;

export default GlobalStyle;