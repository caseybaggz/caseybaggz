// @flow

import React, { Component } from "react";

import HStyles from './h1.module.css';

export default class H1 extends Component<{},{}> {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <h1 className={HStyles.h1}>{this.props.children}</h1>;
  }
}
