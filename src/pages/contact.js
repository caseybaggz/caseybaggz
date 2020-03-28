// @flow

import React from 'react';
import HelmetMeta from '../components/layout/HelmetMeta';
import Layout from '../components/layout/Layout';

type Props = {};

function Contact(props: Props): React$Node {
  return (
    <Layout>
      <HelmetMeta />
      Hang tight! It's coming soon!
    </Layout>
  );
}

export default React.memo(Contact);
