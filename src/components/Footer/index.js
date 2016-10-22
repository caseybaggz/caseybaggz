import React, { Component } from 'react';
import FooterLink from '../FooterLink';
import SocialLinks from './social-links.json';
import './Footer.css';


export default class Footer extends Component {
  constructor() {
    super();
    this.items = SocialLinks;

    // cache methods
    this._getItems = this._getItems.bind(this);
  }

  // PRIVATE

  _getItems() {
    return this.items.map((item, index) => (
      <FooterLink { ...item } key={ index } />
    ));
  }


  render() {
    const items = this._getItems();

    return (
      <footer className="Footer">
        <ul className="Footer-social-list">
          { items }
        </ul>
      </footer>
    );
  }
}
