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

  getBgColor = (): string => {
    switch (this.props.route) {
      case '/colorblind':
        return "#2196F3";

      default:
        return "#7c4dff";
    }
  }

  render() {
    const bg = this.getBgColor();

    return(
      <Wrapper bg={bg}>
        <Navbar />

        {this.props.children}
      </Wrapper>
    );
  }
}