// @flow

import React from 'react';
import DetailLayout from '../components/layout/DetailLayout';
import HelmetMeta from '../components/layout/HelmetMeta';

type Props = {};

function Work(props: Props): React$Node {
  return (
    <DetailLayout headline="Werk">
      <HelmetMeta />

      <div>hello</div>
    </DetailLayout>
  );
}

export default React.memo(Work);
