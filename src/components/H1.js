// @flow

import React, { Component } from "react";

const hStyle = {
  color: 'white',
  fontSize: '64px'
};

export default class H1 extends Component<{},{}> {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <h1 style={hStyle}>{this.props.children}</h1>;
  }
}
