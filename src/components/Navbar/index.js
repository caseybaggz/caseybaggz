// @flow

import React, { Component } from 'react';
import { Link } from 'gatsby';

import NavStyles from './navbar.module.css';

const links: Array<Object> = [
  { id: 0, text: "Home", url: "/", el: "link" },
  { id: 1, text: "Color-blind", url: "/colorblind", el: "link" },
  {
    id: 2,
    text: "Speaking",
    url: "https://medium.com/@caseybaggz/post-squares-conf-2016-5ecac18387c",
    el: ""
  },
  { id: 3, text: "Posts", url: "https://medium.com/@caseybaggz", el: "" },
  { id: 4, text: "Contact", url: "mailto:caseybaggz@gmail.com", el: "" }
];

export default class Navbar extends Component<{},{}> {
  shouldComponentUpdate() {
    return false;
  }

  getLinks = () => {
    return links.map(obj => {
      if (obj.el === 'link') {
        return(
          <li key={obj.id} className={NavStyles.li}>
            <Link to={obj.url} className={NavStyles.link}>
              {obj.text}
            </Link>
          </li>
        );
      }

      return <li key={obj.id} className={NavStyles.li}>
          <a href={obj.url} className={NavStyles.link}>
            {obj.text}
          </a>
        </li>;
    });
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