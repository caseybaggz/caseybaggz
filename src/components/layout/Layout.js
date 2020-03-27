// @flow

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Footer from './Footer';
import GlobalStyle from '../../utils/GlobalStyle';
import theme from '../../utils/theme';
// import media from '../../utils/media';

const Wrapper = styled.div(
  props => `
  background: ${props.theme.white};
  min-height: 100vh;
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

        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}

export default React.memo(Layout);