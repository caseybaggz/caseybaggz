import React from 'react';
import classNames from 'classnames';
import NavLink from '../components/NavLink';


export default class Home extends React.Component {
  render() {
    return (
      <div className="home-view-container">
        <div className="feature">
          <p className="sub-headline">
            React & Rails
            <span className="br-mobile" />
            Creative Developer
          </p>
        </div>

        <div className="recent-work-container">
          <p className="headline">recent work</p>
          <div className="work-wrapper">
            <div className="recent-item lays">
              <NavLink to="/works/lays" className="link">
                <span className="info">
                  <p className="type">React, es6 & Rails</p>
                </span>
              </NavLink>
            </div>

            <div className="recent-item thrive">
              <NavLink to="/works/thrive" className="link">
                <span className="info">
                  <p className="type">React, es6 & Rails</p>
                </span>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="cta-wrapper">
          <div className="btn-wrapper">
            <a href="mailto:caseybaggz@gmail.com" className="btn">let's talk</a>
          </div>
        </div>

        <footer className="footer">
          <ul className="social-list">
            <li className="item github">
              <a href="https://github.com/caseybaggz" className="link" target="_blank" />
            </li>
            <li className="item linkedin">
              <a href="https://www.linkedin.com/in/caseybaggz?trk=hp-identity-name" className="link" target="_blank" />
            </li>
            <li className="item twitter">
              <a href="https://twitter.com/caseybaggz" className="link" target="_blank" />
            </li>
            <li className="item codepen">
              <a href="http://codepen.io/caseybaggz/" className="link" target="_blank" />
            </li>
          </ul>
        </footer>
      </div>
    );
  }


  // PRIVATE

}
