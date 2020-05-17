// @flow

import React from 'react';
import styled from 'styled-components';
import Headline from '../typography/Headline';
import Copy from '../typography/Copy';

const BodyText = styled(Copy)`
  padding-top: 24px;
`;

type Props = {
  children: any,
  headline: string
};

function InfoSection(props: Props) {
  return (
    <div>
      <Headline>{props.headline}</Headline>
      <BodyText>{props.children}</BodyText>
    </div>
  );
}

InfoSection.defaultProps = {
  headline: 'Headline'
};

export default React.memo<Props>(InfoSection);
