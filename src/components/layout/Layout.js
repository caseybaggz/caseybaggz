// @flow

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Feature from '../layout/Feature';
import Nav from '../layout/Nav';
import Disclaimer from '../layout/Disclaimer';
import GlobalStyle from '../../utils/GlobalStyle';
import theme from '../../utils/theme';
import media from '../../utils/media';

const Wrapper = styled.div(
  props => `
  min-height: 100vh;
`
);

const Content = styled.div`
  background-color: ${props => props.theme.white};
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  margin-top: 369px;
  padding-top: 53px;
  position: relative;
  z-index: 1;

  ${media.medium} {
    margin-top: 70px;
    margin-left: 50%;
    width: 683px;
  }
`;

type Props = {
  children: Array<Object>
};

function Layout(props: Props): React$Node {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyle />

        <Feature />

        <Content>
          <Nav />

          {props.children}

          <Disclaimer />
        </Content>
      </Wrapper>
    </ThemeProvider>
  );
}

export default React.memo(Layout);