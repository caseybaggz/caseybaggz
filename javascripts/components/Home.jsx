import React from 'react';
import classNames from 'classnames';
import NavLink from './NavLink';
import Footer from './Footer';


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

        <Footer />
      </div>
    );
  }


  // PRIVATE

}
