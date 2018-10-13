// @flow

import React, { Component } from 'react';
import { Link } from 'gatsby';

const links = [
  { id: 0, text: "Home", url: "/" },
  { id: 1, text: "Color-blind", url: "/colorblind" },
  { id: 2, text: "Speaking", url: "/speaking" },
  { id: 3, text: "Posts", url: "/posts" },
  { id: 4, text: "Contact", url: "/contact" }
];

const nWrapperStyle = {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%'
};

const ulStyle = {
  listStyle: 'none'
};

const liStyle = {
  display: 'inline-block',
  marginRight: '24px'
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none'
};

export default class Navbar extends Component {
  shouldComponentUpdate() {
    return false;
  }

  getLinks = () => {
    return links.map(obj => (
      <li key={obj.id} style={liStyle}>
        <Link to={obj.url} style={linkStyle}>
          {obj.text}
        </Link>
      </li>
    ));
  }

  render() {
    const links = this.getLinks();

    return(
      <div style={nWrapperStyle}>
        <ul style={ulStyle}>
          {links}
        </ul>
      </div>
    );
  }
}