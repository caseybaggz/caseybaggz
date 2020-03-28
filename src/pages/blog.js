// @flow

import React from 'react';
import ComingSoon from '../components/layout/ComingSoon';

type Props = {};

function Blog(props: Props): React$Node {
  return <ComingSoon />;
}

export default React.memo(Blog);
