// @flow

import React, { Component } from "react";

import CopyStyles from './copy.module.css';

export default class Copy extends Component<{},{}> {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <p className={CopyStyles.copy}>{this.props.children}</p>;
  }
}
