// @flow

import React from 'react';
import ComingSoon from '../components/layout/ComingSoon';

type Props = {};

function Work(props: Props): React$Node {
  return <ComingSoon />;
}

export default React.memo(Work);
