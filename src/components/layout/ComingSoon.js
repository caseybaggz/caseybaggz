// @flow

import React from 'react';
import styled from 'styled-components';
import Emoji from '../Emoji';
import FeatureItem from './FeatureItem';
import HelmetMeta from './HelmetMeta';
import Illustration from './Illustration';
import InfoSection from './InfoSection';
import Layout from './Layout';

const EmojiWrapper = styled.div`
  text-align: center;
`;

const comingSoonContent: React$Node = (
  <Layout headline="🙈 🤷‍♀️ 🙈">
    <HelmetMeta />

    <FeatureItem>
      <Illustration />
      <InfoSection headline="We'll Get There Soon...">
        Adding all this stuff in my off hours takes some time. This is in the
        backlog and I'll do my best to get it out soon.
      </InfoSection>
    </FeatureItem>

    <EmojiWrapper>
      <Emoji label="hang ten" size="24px" symbol="🤙" />
      <Emoji label="nerd" size="24px" symbol="🤓" />
      <Emoji label="hang ten" size="24px" symbol="🤙" />
    </EmojiWrapper>
  </Layout>
);

type Props = {};

function ComingSoon(props: Props): React$Node {
  return comingSoonContent;
}

export default React.memo(ComingSoon);
