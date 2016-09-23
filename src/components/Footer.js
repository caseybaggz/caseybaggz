import 'whatwg-fetch';
import React, { Component } from 'react';
import FooterLink from './FooterLink';
import FetchHelper from '../classes/FetchHelper';
import '../stylesheets/Footer.css';


export default class Footer extends Component {
  constructor() {
    super();

    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/caseybaggz/caseybaggz/master/api/social-links.json')
      .then(FetchHelper.status)
      .then(FetchHelper.parseJSON)
      .then((data) => {
        this.setState({ items: data });
      })
      .catch((e) => {
        console.warn(e);
      });
  }

  render() {
    return (
      <footer className="footer-container">
        <ul className="social-list">
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
