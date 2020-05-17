// @flow

import React from 'react';
import ComingSoon from '../components/layout/ComingSoon';

type Props = {};

function Blog(props: Props) {
  return <ComingSoon />;
}

export default React.memo<Props>(Blog);
