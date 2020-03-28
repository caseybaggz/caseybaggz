// @flow

import React from "react";
import styled from 'styled-components';
import HelmetMeta from '../components/layout/HelmetMeta';
import Layout from '../components/layout/Layout';
import Illustration from '../components/layout/Illustration';
import InfoSection from '../components/layout/InfoSection';
import ExternalTextLink from '../components/actions/ExternalTextLink';
import RectangularPattern from '../components/layout/patterns/RectangularPattern';
import Headline from '../components/typography/Headline';
import Copy from '../components/typography/Copy';
import Emoji from '../components/Emoji';

const Feature = styled.div(
  props => `
  padding-bottom: 65px;
  padding-left: ${props.theme.featureSidePad};
  padding-right: ${props.theme.featureSidePad};
`
);

const RealTalkWrapper = styled(Feature)`
  padding-top: 55px;
`;

const RealList = styled.ul`
  padding-top: 24px;
`;

const RealListItem = styled.li`
  margin-bottom: 12px;
`;

const homeContent: React$Node = (
  <Layout>
    <HelmetMeta />

    <Feature>
      <Illustration />
      <InfoSection headline="Catchy Title">
        What if product or portfolio sites were unique, refreshing, and not just
        an overused template?
        <br />
        <br />
        <strong>This site is my artistic way of breaking the monotony.</strong>
        <br />
        <br />
        I’m the Technical Product Owner, Lead Frontend Engineer/Manager, Lead
        Designer, and overall Mastermind behind
        <ExternalTextLink href="https://pattyrn.com/">Pattyrn</ExternalTextLink>
      </InfoSection>
    </Feature>

    <RectangularPattern />

    <RealTalkWrapper>
      <Headline>Real Talk.</Headline>
      <RealList>
        <RealListItem>
          <Copy>
            <Emoji label="rising" symbol="⬆️" noMargin />
            <Emoji label="sun" symbol="☀️" noMargin />
            <Emoji label="moon" symbol="🌕" noMargin />
            Sagittarius, optimistic and blunt
          </Copy>
        </RealListItem>
        <RealListItem>
          <Copy>
            <Emoji label="d6" symbol="🎲" noMargin />
            DnD campaign for over 1yr
          </Copy>
        </RealListItem>
        <RealListItem>
          <Copy>
            <Emoji label="horse" symbol="🐴" noMargin />
            Animal lover - vegan
          </Copy>
        </RealListItem>
        <RealListItem>
          <Copy>
            <Emoji label="plant" symbol="🌿" noMargin />
            Owns over 30 house plants
          </Copy>
        </RealListItem>
      </RealList>
    </RealTalkWrapper>
  </Layout>
);

type Props = {};

function Home(props: Props): React$Node {
  return homeContent;
}

export default React.memo(Home);
