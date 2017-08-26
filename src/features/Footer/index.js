import React, { Component } from 'react';

import { Image } from 'features';

import {
  Github,
  LinkedIn,
  Twitter,
  s6
} from 'images';

import './Footer.css';


export default class Footer extends Component {
  constructor() {
    super();
    this.links = [
      { id: 0, img: Github, url: 'https://github.com/caseybaggz' },
      { id: 1, img: LinkedIn, url: 'https://www.linkedin.com/in/caseybaggz/' },
      { id: 2, img: Twitter, url: 'https://twitter.com/caseybaggz' },
      { id: 3, img: s6, url: 'https://society6.com/zart' }
    ];
  }

  getItems = () => {
    return this.links.map((link, eq) => (
      <li
        className="Footer-li"
        key={link.id}
      >
        <a
          className="Footer-link"
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            alt="social icon"
            src={link.img}
          />
        </a>
      </li>
    ));
  }

  render() {
    const items = this.getItems();

    return(
      <div className="Footer">
        <ul className="Footer-ul">
          {items}
        </ul>
      </div>
    );
  }
}
