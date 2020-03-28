// @flow

import React from "react";
import HelmetMeta from '../components/layout/HelmetMeta';
import Layout from '../components/layout/Layout';

type Props = {};

function Home(props: Props): React$Node {
  return (
    <Layout>
      <HelmetMeta />

      <div>
        main content
      </div>

      <div>
        template
      </div>
    </Layout>
  );
}

export default React.memo(Home);
