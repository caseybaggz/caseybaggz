// @flow

import React from "react";
import styled from 'styled-components';
import HelmetMeta from '../components/layout/HelmetMeta';
import Layout from '../components/layout/Layout';

const Feature = styled.div`
  padding-bottom: 65px;
  padding-left: 31px;
  padding-right: 31px;
  padding-top: 53px;
`;

type Props = {};

function Home(props: Props): React$Node {
  return (
    <Layout>
      <HelmetMeta />
      <Feature>template</Feature>
    </Layout>
  );
}

export default React.memo(Home);
