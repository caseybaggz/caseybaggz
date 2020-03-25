// @flow

import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../utils/theme';

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
    font-family: ${props => props.theme.bodyFont};
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

  ::-moz-selection {
    color: ${props => props.theme.lightText};
    background: ${props => props.theme.darkText}
  }
  ::selection {
    color: ${props => props.theme.lightText};
    background: ${props => props.theme.darkText}
  }
`;

type Props = {
  children: Array<Object>
};

function Layout(props: Props): React$Node {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        {props.children}
      </div>
    </ThemeProvider>
  );
}

export default React.memo(Layout);