// @flow

import React, { Component } from 'react';
import wrapperStyles from './wrapper.module.css';

type Props = {
  bg: string
};

export default class Wrapper extends Component<Props, {}> {
  static defaultProps = {
    bg: '#fff'
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const wrapperStyle = {
      backgroundColor: this.props.bg
    };

    return(
      <div className={wrapperStyles.Wrapper} style={wrapperStyle}>
        {this.props.children}
      </div>
    );
  }
}