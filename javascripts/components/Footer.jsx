import React from 'react';
import { NavItems } from '../NavItems';

export default class Footer extends React.Component {
  constructor() {
    super();
    this.items = NavItems;
  }

  render() {
    return (
      <footer className="footer-container">
        <ul className="social-list">
          {
            this.items.map((item, index) => {
              return (
                <li className={ 'item ' + item.name } key={ index }>
                  <a href={ item.link } className="link" target="_blank" />
                </li>
              );
            })
          }
        </ul>
      </footer>
    );
  }
}
