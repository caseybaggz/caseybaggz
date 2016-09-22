import React, { Component } from 'react';
import RecentItem from './RecentItem';
import Footer from './Footer';
import MailBtn from './MailBtn';
import '../stylesheets/HomeView.css';


export default class HomeView extends Component {
  constructor() {
    super();

    this.state = {
      recentItems: [
        { name: 'lays', stack: 'React, es6, & Rails' },
        { name: 'thrive', stack: 'React & es6' },
      ]
    };
  }

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
            {
              this.state.recentItems.map((item, index) => (
                <RecentItem { ...item } key={ index } />
              ))
            }
          </div>
        </div>

        <div className="cta-wrapper">
          <div className="btn-wrapper">
            <MailBtn />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
