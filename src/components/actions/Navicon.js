// @flow

import React from 'react';
import styled from 'styled-components';
import { animated, interpolate, useChain, useSpring } from 'react-spring';
import media from '../../utils/media';

const Wrapper = styled.div`
  display: inline-block;
  height: 18px;
  left: 31px;
  position: fixed;
  top: 26px;
  width: 30px;
  z-index: 1;

  ${media.medium} {
    display: none;
  }
`;

const Bar = styled(animated.div)`
  background-color: ${props => props.theme.lightText};
  border-radius: 15px;
  height: 2px;
  left: 0;
  position: absolute;
  transform-origin: center;
`;

const TopBar = styled(Bar)`
  top: 0;
  width: 100%;
`;

const BottomBar = styled(Bar)`
  bottom: 0;
  width: 20px;
`;

type Props = {
  show: boolean,
  onClick: () => {}
};

function Navicon(props: Props): React$Node {
  const { show } = props;
  const { yPos, rot, width } = useSpring({
    rot: show ? 45 : 0,
    yPos: show ? 8 : 0,
    width: show ? '30px' : '20px'
  });

  return (
    <Wrapper onClick={props.onClick}>
      <TopBar
        style={{
          transform: interpolate(
            [
              rot.interpolate(r => `rotate(${r}deg)`),
              yPos.interpolate(y => `translate3d(0, ${y}px, 0)`)
            ],
            (rotate, translate) => `${translate} ${rotate}`
          )
        }}
      />
      <BottomBar
        style={{
          transform: interpolate(
            [
              rot.interpolate(r => `rotate(-${r}deg)`),
              yPos.interpolate(y => `translate3d(0, -${y}px, 0)`)
            ],
            (rotate, translate) => `${translate} ${rotate}`
          ),
          width
        }}
      />
    </Wrapper>
  );
}

Navicon.defaultProps = {
  show: false,
  onClick: () => {}
};

export default React.memo(Navicon);