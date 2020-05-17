// @flow

import React from 'react';
import styled from 'styled-components';
import Legal from '../typography/Legal';

const Wrapper = styled.div`
  background-color: ${props => props.theme.gray6};
  margin-top: 61px;
  padding-bottom: 23px;
  padding-left: 23px;
  padding-right: 23px;
  padding-top: 23px;
  text-align: center;
`;

const disclaimerContent: React$Node = (
  <Wrapper>
    <Legal>Copyright that no one cares about. #2020</Legal>
  </Wrapper>
);

type Props = {};

function Disclaimer(props: Props) {
  return disclaimerContent;
}

export default React.memo<Props>(Disclaimer);