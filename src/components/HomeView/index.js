import React, { Component } from 'react';
import Footer from '../Footer';
import MailBtn from '../MailBtn';
import './HomeView.css';


export default class HomeView extends Component {
  render() {
    return (
      <div className="HomeView">
        <div className="HomeView-feature">
          <p className="HomeView-sub-headline">
            FE-Engineer & Speaker
          </p>
        </div>

        <div className="HomeView-recent-container">
          <p className="HomeView-recent-description">
            Ey, yo! I'm Casey Baggz and I have the privilege to lead the
            front-end team at
            <a
              className="HomeView-link"
              href="https://www.whiplashmerch.com/"
              target="_blank">
              Whiplash
            </a>.
          </p>

          <p className="HomeView-recent-description">
            When I'm not cooking up a new React app or helping contribute to the
            <a
              className="HomeView-link cushion"
              href="https://github.com/facebookincubator/create-react-app"
              target="_blank">
              create-react-app
            </a>
            cli, I'm usually continuing to build up our
            <a
              className="HomeView-link"
              href="https://www.npmjs.com/package/whiplash-ui-library"
              target="_blank">
              whiplash-ui-library
            </a> npm package.
          </p>

          <p className="HomeView-recent-description">
            I speak at conferences if they are crazy enough to have me and I
            love animals. What else do you want from me?
          </p>
        </div>

        <div className="HomeView-cta-wrapper">
          <div className="HomeView-btn-wrapper">
            <MailBtn />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
