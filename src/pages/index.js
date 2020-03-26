// @flow

import React from "react";
import Layout from '../components/layout/Layout';
import HelmetMeta from '../components/layout/HelmetMeta';

const home = (
  <Layout>
    <HelmetMeta />

    test
  </Layout>
);

type Props = {};

function Home(props: Props): React$Node {
  return home;
}

export default React.memo(Home);
