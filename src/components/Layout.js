// @flow

import React, { PureComponent } from 'react';
import Wrapper from './Wrapper';
import Navbar from './Navbar';

type Props = {
  children: Array<Object>,
  route: string
};

export default class Layout extends PureComponent<Props, {}> {
  static defaultProps = {
    children: [],
    route: '/'
  }

  render() {
    return(
      <Wrapper bg="#7c4dff">
        <Navbar />

        {this.props.children}
      </Wrapper>
    );
  }
}