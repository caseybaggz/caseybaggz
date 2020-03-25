// @flow

import React from 'react';

type Props = {
  children: Array<Object>
};

function Layout(props: Props): React$Node {
  return (
    <div>
      {props.children}
    </div>
  );
}

export default React.memo(Layout);