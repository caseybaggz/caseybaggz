// @flow

import React, { Component } from 'react';

import FooterStyles from './footer.module.css';

const footer = (
  <footer className={FooterStyles.footer}>
    copyright Casey Baggz 2018 / #keepitminimalbruh
  </footer>
);

export default class Footer extends Component<{},{}> {
  shouldComponentUpdate(): boolean {
    return false;
  }

  render() {
    return footer;
  }
}