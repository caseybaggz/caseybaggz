import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import githubIco from '../../images/ico/github.svg';
import codepenIco from '../../images/ico/codepen.svg';
import twitterIco from '../../images/ico/twitter.svg';
import linkedinIco from '../../images/ico/linkedin.svg';
import './FooterLink.css';


const itemBg = StyleSheet.create({
  github: {
    backgroundImage: `url(${ githubIco })`
  },
  linkedin: {
    backgroundImage: `url(${ linkedinIco })`
  },
  twitter: {
    backgroundImage: `url(${ twitterIco })`
  },
  codepen: {
    backgroundImage: `url(${ codepenIco })`
  }
});


export default class FooterLink extends Component {
  render() {
    const itemStyle = {
      backgroundColor: '#546575',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '2em'
    };

    return (
      <li className={ 'FooterLink ' + css(itemBg[this.props.name]) } style={ itemStyle }>
        <a href={ this.props.url } className="FooterLink-link" target="_blank" />
      </li>
    );
  }
}
