// @flow

import React from 'react';
import styled from 'styled-components';
import FooterButton from '../actions/FooterButton';

// TODO: Convert to data template

const Wrapper = styled.footer`
  padding-bottom: 25px;
  padding-top: 75px;
`;

const FooterLinks = styled.ul`
  align-items: center;
  display: flex;
  overflow-x: auto;
  padding-left: 47px;
  width: 100%;

  li {
    margin-right: 22px;
  }
`;

const footerContent: React$Node = (
  <Wrapper>
    <FooterLinks>
      <li>
        <FooterButton href="https://twitter.com/caseybaggz">
          twitter
        </FooterButton>
      </li>
      <li>
        <FooterButton href="https://www.linkedin.com/in/caseybaggz/">
          linkedIn
        </FooterButton>
      </li>
      <li>
        <FooterButton href="https://github.com/caseybaggz">gitHub</FooterButton>
      </li>
      <li>
        <FooterButton href="https://dribbble.com/caseybaggz">
          dribbble
        </FooterButton>
      </li>
    </FooterLinks>
  </Wrapper>
);

type Props = {};

function Footer(props: Props): React$Node {
  return footerContent;
}

export default React.memo(Footer);