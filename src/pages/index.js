// @flow

import React from "react";
import styled from 'styled-components';
import FeatureItem from '../components/layout/FeatureItem';
import HelmetMeta from '../components/layout/HelmetMeta';
import Layout from '../components/layout/Layout';
import Illustration from '../components/layout/Illustration';
import InfoSection from '../components/layout/InfoSection';
import Button from '../components/actions/Button';
import ExternalTextLink from '../components/actions/ExternalTextLink';
import RectangularPattern from '../components/layout/patterns/RectangularPattern';
import Headline from '../components/typography/Headline';
import Copy from '../components/typography/Copy';
import Emoji from '../components/Emoji';

const RealTalkWrapper = styled(FeatureItem)`
  padding-top: 55px;
`;

const RealList = styled.ul`
  padding-top: 24px;
`;

const RealListItem = styled.li`
  margin-bottom: 12px;
`;

const ButtonWrapper = styled(FeatureItem)`
  padding-bottom: initial;
`;

const homeContent: React$Node = (
  <Layout headline="Howzit?! ✌️">
    <HelmetMeta />

    <FeatureItem>
      <Illustration />
      <InfoSection headline="Catchy Title">
        Welcome to the madness that is my free time and experimentation station. Sometimes it will make sense, other times, it won't. Either way, enjoy yourself peeking around.
        <br />
        <br />
        <strong>This site is my artistic way of breaking the monotony.</strong>
        <br />
        <br />
        I’m the Technical Product Owner, Lead Frontend Engineer/Manager, Lead
        Designer, and overall Mastermind behind Pattyrn.
      </InfoSection>
    </FeatureItem>

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
             #plantLady
          </Copy>
        </RealListItem>
      </RealList>
    </RealTalkWrapper>

    <ButtonWrapper>
      <Button to="/contact" width="100%">
        Final Contact Opportunity???
      </Button>
    </ButtonWrapper>
  </Layout>
);

type Props = {};

function Home(props: Props): React$Node {
  return homeContent;
}

export default React.memo(Home);
