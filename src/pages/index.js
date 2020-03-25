// @flow

import React from "react";
import Layout from '../components/Layout';
import HelmetMeta from '../components/HelmetMeta';

import './global.module.css';

const home = (
  <Layout>
    <HelmetMeta />
  </Layout>
);

type Props = {};

function Home(props: Props): React$Node {
  return home;
}

export default React.memo(Home);
