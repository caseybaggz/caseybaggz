import React, { Component } from 'react';
import FooterLink from '../FooterLink';
import SocialLinks from './social-links.json';
import './Footer.css';


export default class Footer extends Component {
  constructor() {
    super();

    this.state = {
      items: SocialLinks
    };
  }


  render() {
    return (
      <footer className="Footer">
        <ul className="Footer-social-list">
          {
            this.state.items.map((item, index) => (
              <FooterLink { ...item } key={ index } />
            ))
          }
        </ul>
      </footer>
    );
  }
}
