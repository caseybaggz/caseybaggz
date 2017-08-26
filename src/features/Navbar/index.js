import React, { Component } from 'react';

import './Navbar.css';


export default class Navbar extends Component {
  constructor() {
    super();
    this.links = [
      { id: 0, text: 'posts', url: 'https://medium.com/@caseybaggz' },
      { id: 1, text: 'speaking', url: 'https://medium.com/@caseybaggz/post-squares-conf-2016-5ecac18387c' }
    ];
  }

  getNavItems = () => {
    return this.links.map((link, eq) => (
      <li
        className="Navbar-li"
        key={link.id}
      >
        <a
          className="Navbar-link"
          href={link.url}
          target="_blank"
        >
          {link.text}
        </a>
      </li>
    ));
  }

  render() {
    const navItems = this.getNavItems();

    return(
      <div className="Navbar">
        <ul className="Navbar-ul">
          { navItems }

          <li className="Navbar-li">
            <a
              className="Navbar-link btn"
              href="mailto:caseybaggz@gmail.com?subject=Let%27s%20Do%20Business"
            >
              hire me
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
