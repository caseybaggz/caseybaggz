// @flow

import React, { Component } from 'react';
import { Link } from 'gatsby';

import NavStyles from './navbar.module.css';

const links: Array<Object> = [
  { id: 0, text: "Home", url: "/" },
  { id: 1, text: "Color-blind", url: "/colorblind" },
  { id: 2, text: "Speaking", url: "/speaking" },
  { id: 3, text: "Posts", url: "/posts" },
  { id: 4, text: "Contact", url: "/contact" }
];

export default class Navbar extends Component<{},{}> {
  shouldComponentUpdate() {
    return false;
  }

  getLinks = () => {
    return links.map(obj => (
      <li key={obj.id} className={NavStyles.li}>
        <Link to={obj.url} className={NavStyles.link}>
          {obj.text}
        </Link>
      </li>
    ));
  }

  render() {
    const links = this.getLinks();

    return(
      <div className={NavStyles.navbar}>

        <ul className={NavStyles.ul}>
          {links}
        </ul>
      </div>
    );
  }
}