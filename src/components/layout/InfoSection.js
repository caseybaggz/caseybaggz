// @flow

import React from 'react';
import styled from 'styled-components';
import Headline from '../typography/Headline';
import Copy from '../typography/Copy';

const Wrapper = styled.div`
  padding-bottom: 65px;
`;

const BodyText = styled(Copy)`
  padding-top: 24px;
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
