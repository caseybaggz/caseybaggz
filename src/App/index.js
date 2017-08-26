import React, { Component } from 'react';

import {
  Image,
  Navbar
} from 'features';

import {
  Logo
} from 'images';

import './App.css';



export default class App extends Component {
  render() {
    return(
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>

        <div className="App-feature">
          <h3 className="App-logo-wrapper">
            <Image
              alt="logo"
              src={Logo}
            />
          </h3>

          <h4 className="App-title">
            mobile app & web developer
          </h4>

          <p className="App-copy">
            I do what I love and love what I do. For me, that is creating
            innovative mobile/web apps. Technology has the power to change the
            world and when you combine skill with creativity - anything is
            possible. I involve 200% of my heart and soul in each project
            whether it be a simple static site or an intensive SaaS product.
            Every pixel and feature matters.
          </p>
          <p className="App-copy">
            I have spent the past 7 years perfecting my craft and every project
            I have been involved with since the start of my career has been
            responsive and mobile friendly.
          </p>
          <p className="App-copy">
            I have since had the priveledge of building everything from a
             SmartWatch app for the
            <a
              className="App-inline-link"
              href="http://travel.tripcase.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sabre TripCase team
            </a>, to creating responsive sites for both Lay's
            <a
              className="App-inline-link"
              href="http://www.snackandbakery.com/articles/89070-lays-passport-to-flavor-potato-chips"
              target="_blank"
              rel="noopener noreferrer"
            >
              Passport to Flavor
            </a>, and
            <a
              className="App-inline-link"
              href="https://www.facebook.com/lays/videos/10153834919623058/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Flavor Swap
            </a> campaigns, building out 4 mobile games in the LifeChurch
            <a
              className="App-inline-link"
              href="https://www.bible.com/kids"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bible App for Kids
            </a>, to helping Whiplash Merch rebuild their product into a
            successful
            <a
              className="App-inline-link"
              href="https://app.getwhiplash.com/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              Progressive web React app
            </a> accompanied by thier own
            <a
              className="App-inline-link"
              href="https://www.npmjs.com/package/whiplash-ui-library"
              target="_blank"
              rel="noopener noreferrer"
            >
              React UI library
            </a>.
          </p>
          <p className="App-copy">
            Work never stops and I'm always creating new things with wonderful
            new people. Check out my posts for Case-Studies and other reading
            material that I've come up with recently.
          </p>
        </div>
      </div>
    );
  }
}
