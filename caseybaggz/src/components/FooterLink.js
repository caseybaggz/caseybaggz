import React, { Component } from 'react';
import '../stylesheets/FooterLink.css';

export default class FooterLink extends Component {
  render() {
    const itemStyle = {
      backgroundColor: '#546575',
      backgroundImage: 'url("../images/ico/${ this.props.name }.svg")',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '2em'
    };

    return (
      <li className={ `footer-item ${ this.props.name }` } style={ itemStyle }>
        <a href={ this.props.link } className="link" target="_blank" />
      </li>
    );
  }
}
