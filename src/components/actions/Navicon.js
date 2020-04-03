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
  border-radius: 15px;
  height: 2px;
  left: 0;
  position: absolute;
  transform-origin: center;
`;

const TopBar = styled(Bar)`
  background-color: ${props => props.theme[`${props.kind}Text`]};
  top: 0;
  width: 100%;
`;

const BottomBar = styled(Bar)`
  background-color: ${props => props.theme[`${props.kind}Text`]};
  bottom: 0;
  width: 20px;
`;

type Props = {
  onClick: () => {},
  show: boolean,
  kind: string
};

function Navicon(props: Props): React$Node {
  const { show, kind } = props;
  const { yPos, rot, width } = useSpring({
    rot: show ? 45 : 0,
    yPos: show ? 8 : 0,
    width: show ? '30px' : '20px'
  });

  return (
    <Wrapper onClick={props.onClick}>
      <TopBar
        kind={kind}
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
        kind={kind}
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
  onClick: () => {},
  show: false,
  kind: 'light'
};

export default React.memo(Navicon);