// @flow

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Feature from '../layout/Feature';
import GlobalStyle from '../../utils/GlobalStyle';
import theme from '../../utils/theme';
// import media from '../../utils/media';

const Wrapper = styled.div(
  props => `
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

        <Feature />

        {props.children}
      </Wrapper>
    </ThemeProvider>
  );
}

export default React.memo(Layout);