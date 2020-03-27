// @flow

import React from 'react';
import styled from 'styled-components';
import Headline from '../typography/Headline';
import Copy from '../typography/Copy';

const Wrapper = styled.div`
  border-top: 6px solid ${props => props.theme.black};
  padding-bottom: 48px;
  padding-right: 47px;
  padding-top: 8px;
  margin-left: 47px;
  margin-top: 113px;
  width: 100%;
`;

const BodyText = styled(Copy)`
  color: ${props => props.theme.blackAt70};
  line-height: 1.8;
  max-width: 500px;
  padding-top: 57px;
`;

type Props = {
  children: any,
  headline: string
};

function InfoSection(props: Props): React$Node {
  return (
    <Wrapper>
      <Headline>{props.headline}</Headline>
      <BodyText>{props.children}</BodyText>
    </Wrapper>
  );
}

InfoSection.defaultProps = {
  headline: 'Headline'
};

export default React.memo(InfoSection);
