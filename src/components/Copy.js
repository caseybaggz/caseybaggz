// @flow

import React, { Component } from "react";

const cStyle = {
  color: "white",
  fontFamily: `'Open Sans', Helvetica, sans-serif`
};

export default class Copy extends Component<{},{}> {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <p style={cStyle}>{this.props.children}</p>;
  }
}
