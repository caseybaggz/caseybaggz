// @flow

import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../../utils/theme';
import media from '../../utils/media';

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

const Wrapper = styled.div(
  props => `
  background: ${props.theme.white};
  min-height: 100vh;

  ${media.large} {
    background: linear-gradient(
      90deg,
      ${props.theme.white} 0%,
      ${props.theme.white} 50%,
      ${props.theme.black} 50%,
      ${props.theme.black} 100%
    );
  }
`
);

type Props = {
  children: Array<Object>
};

function Layout(props: Props): React$Node {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyle />

        {props.children}
      </Wrapper>
    </ThemeProvider>
  );
}

export default React.memo(Layout);