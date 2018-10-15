// @flow

import React, { Component } from 'react';

import BreakStyles from './mobilebreak.module.css';

const mb = <span className={BreakStyles.break} />;

export default class MobileBreak extends Component<{},{}> {
  shouldComponentUpdate(): boolean {
    return false;
  }

  render() {
    return mb;
  }
}