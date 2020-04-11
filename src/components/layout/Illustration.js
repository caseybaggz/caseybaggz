// @flow

import React from 'react';
import styled from 'styled-components';
import Caption from '../typography/Caption';
import media from '../../utils/media';

const Wrapper = styled.div`
  padding-bottom: 73px;
`;

const Box = styled.div`
  align-items: center;
  background-color: ${props => props.theme.black};
  display: flex;
  flex-direction: column;
  height: 190px;
  justify-content: center;
  width: 100%;

  ${media.medium} {
    height: 300px;
  }
`;

const Note = styled.p`
  color: ${props => props.theme.gray5};
  font-size: 14px;
  line-height: 1.8;
  text-align: center;
`;

const illustrationContent: React$Node = (
  <Wrapper>
    <Box>
      <Note>Cool B/W illustration that makes you reflect on life.</Note>
    </Box>
    <Caption>Popular Artist Name</Caption>
  </Wrapper>
);

type Props = {};

function Illustration(props: Props): React$Node {
  return illustrationContent;
}

export default React.memo(Illustration);