// @flow

import React, { Component } from 'react';

import BlockStyles from './blocka.module.css';

type Props = {
  children: any
};

export default class BlockA extends Component<Props, {}> {
  shouldComponentUpdate(): boolean {
    return false;
  }

  render() {
    const { children, ...rest } = this.props;

    return <a {...rest} className={BlockStyles.block}>{children}</a>;
  }
}