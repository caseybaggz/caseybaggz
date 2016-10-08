import React, { Component } from 'react';
import FooterLink from '../FooterLink';
import FetchHelper from '../../classes/FetchHelper';
import './Footer.css';


export default class Footer extends Component {
  constructor() {
    super();

    this.state = {
      items: []
    };
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


  componentDidMount() {
    fetch(`${ process.env.PUBLIC_URL }/social-links.json`)
      .then(FetchHelper.status)
      .then(FetchHelper.parseJSON)
      .then((data) => {
        this.setState({ items: data });
      })
      .catch((e) => {
        console.warn(e);
      });
  }
}
