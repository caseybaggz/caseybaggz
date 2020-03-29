// @flow

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Disclaimer from '../layout/Disclaimer';
import Feature from '../layout/Feature';
import Nav from '../layout/Nav';
import SocialNav from '../layout/SocialNav';
import GlobalStyle from '../../utils/GlobalStyle';
import theme from '../../utils/theme';
import media from '../../utils/media';

const Wrapper = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
  z-index: 1;
`;

const Content = styled.div`
  background-color: ${props => props.theme.white};
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  margin-top: 375px;
  padding-top: 53px;
  position: relative;
  z-index: 2;

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
  const [showSocial, setShowSocial] = React.useState(() => false);

  function handleToggleSocial() {
    return setShowSocial(prevState => !prevState);
  }

  return (
    <ThemeProvider theme={theme}>
      <Wrapper showSocial={showSocial}>
        <GlobalStyle />
        <Feature onClick={handleToggleSocial} />
        <Content>
          <Nav />

          {props.children}

          <Disclaimer />
        </Content>

        <SocialNav />
      </Wrapper>
    </ThemeProvider>
  );
}

export default React.memo(Layout);