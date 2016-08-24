import React from 'react';
import classNames from 'classnames';
import { IndexLink } from 'react-router';
import NavLink from './NavLink';


export default class Nav extends React.Component {
  constructor() {
    super();
    this.navList = '';

    // cache methods
    this._closeNav = this._closeNav.bind(this);
  }


  render() {
    let activeClass = classNames('nav-container', 'light-theme', { active: this.props.active });

    return(
      <div id="navContainer" className={ activeClass } onClick={ this._closeNav }>
        <div className="nav-drawer">
          <div className="brand-container">
            <h2 className="brand">Life.Church</h2>
          </div>

          <NavSearchBar />

          <ul className="nav-list">
            <li className="list-item">
              <IndexLink to="/" activeClassName="active">
                <span className="icon-container">
                  <img src="./images/icons/dark/home.svg" className="icon" />
                </span>
                <span className="link-name">home</span>
              </IndexLink>
            </li>

            {
              this.navList.map((item, index) => {
                return (
                  <li key={ index } className="list-item">
                    <NavLink to={ item.route }>
                      <span className={ 'icon-container ' + item.name }>
                        <img src={ item.icon } className="icon" />
                      </span>
                      <span className="link-name">{ item.name }</span>
                    </NavLink>
                  </li>
                );
              })
            }
          </ul>
        </div>

        <div id="overlay" className="overlay" />
      </div>
    );
  }


  // PRIVATE

  _closeNav(e) {
    let target = e.target.id || false;

    if (target !== 'overlay') {
      return;
    }

    this.props.onUserInput(false);
  }
}
