// @flow

import React from 'react';
import styled from 'styled-components';
import media from '../../utils/media';

const Wrapper = styled.div`
  display: inline-block;
  height: 18px;
  left: 31px;
  position: fixed;
  top: 26px;
  width: 30px;
  z-index: 1;

  &::before,
  &&:after {
    background-color: ${props => props.theme.lightText};
    border-radius: 15px;
    display: block;
    content: '';
    height: 2px;
    left: 0;
    position: absolute;
  }

  &::before {
    top: 0;
    width: 100%;
  }

  &::after {
    bottom: 0;
    width: 20px;
  }

  ${media.medium} {
    display: none;
  }
`;

type Props = {
  onClick: () => {}
};

function Navicon(props: Props): React$Node {
  return <Wrapper onClick={props.onClick} />;
}

Navicon.defaultProps = {
  onClick: () => {}
};

export default React.memo(Navicon);