// @flow

import React from "react";
import styled from 'styled-components';
import HelmetMeta from '../components/layout/HelmetMeta';
import Layout from '../components/layout/Layout';
import Illustration from '../components/layout/Illustration';
import InfoSection from '../components/layout/InfoSection';
import ExternalTextLink from '../components/actions/ExternalTextLink';

const Feature = styled.div(
  props => `
  padding-bottom: 65px;
  padding-left: ${props.theme.featureSidePad};
  padding-right: ${props.theme.featureSidePad};
`
);

type Props = {};

function Home(props: Props): React$Node {
  return (
    <Layout>
      <HelmetMeta />
      <Feature>
        <Illustration />
        <InfoSection headline="Catchy Title">
          What if product or portfolio sites were unique, refreshing, and not
          just an overused template?
          <br />
          <br />
          <strong>
            This site is my artistic way of breaking the monotony.
          </strong>
          <br />
          <br />
          I’m the Technical Product Owner, Lead Frontend Engineer/Manager, Lead
          Designer, and overall Mastermind behind
          <ExternalTextLink href="https://pattyrn.com/">
            Pattyrn
          </ExternalTextLink>
        </InfoSection>
      </Feature>
    </Layout>
  );
}

export default React.memo(Home);
