// @flow

import React, { Component } from 'react';

export default class Wrapper extends Component {
  static defaultProps = {
    bg: '#fff'
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const wrapperStyle = {
      backgroundColor: this.props.bg,
      height: '100%',
      width: '100%'
    };

    return(
      <div style={wrapperStyle}>
        {this.props.children}
      </div>
    );
  }
}