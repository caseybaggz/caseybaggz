import React from 'react';
import classNames from 'classnames';


export default class Home extends React.Component {
  constructor() {
    super();

    // cache methods
    this._animateCardsIn      = this._animateCardsIn.bind(this);
    this._closeModal          = this._closeModal.bind(this);
    this._getContent          = this._getContent.bind(this);
    this._handleScroll        = this._handleScroll.bind(this);
    this._handleSectionScroll = this._handleSectionScroll.bind(this);
    this._showModal           = this._showModal.bind(this);
    this._updateModal         = this._updateModal.bind(this);
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
            <div className="recent-item lays">
              <a href="https://www.lays.com/" className="link" target="_blank">
                <span className="info">
                  <p className="type">React, es6 & Rails</p>
                </span>
              </a>
            </div>

            <div className="recent-item thrive">
              <a href="http://thrive.ovenbits.com/#/?_k=3bwbd3" className="link" target="_blank">
                <span className="info">
                  <p className="type">React, es6 & Rails</p>
                </span>
              </a>
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

  _animateCardsIn(el, index) {
    window.setTimeout(() => {
      el.classList.add('fadeInUp');
    }, 100 * index);
  }


  _closeModal() {
    const el_mainView = document.querySelector('.index-view-container');

    this.setState({
      modalContent: {}
    }, () => {
      el_mainView.classList.remove('box-active');
    });
  }


  _getContent() {
  }


  _handleScroll() {
    const el_home   = document.querySelector('.home-main');
    const el_search = document.querySelector('.link-search-box-container');
    const top = el_home.scrollTop;
    const alreadyHidden = !!el_search.classList.contains('hidden');

    this._handleSectionScroll(top);

    if (alreadyHidden) {
      return;
    } else if (top >= 1 && top <= 100) {
      el_home.classList.add('scrolling');
      el_search.classList.add('hidden');
    } else {
      return;
    }
  }


  _handleSectionScroll(scrollTop) {
    const el_home      = document.querySelector('.home-main');
    const el_section   = document.querySelector('.home-main-section');
    const sectionH     = (el_section.clientHeight);
    const currentIndex = Math.floor(scrollTop / sectionH + 0.5);

    if (currentIndex !== this.state.currentIndex) {
      this.setState({
        currentIndex: currentIndex
      });
    } else {
      return;
    }
  }


  _showModal(props) {
    const el_mainView = document.querySelector('.index-view-container');

    this.setState({
      modalContent: props
    }, () => {
      el_mainView.classList.add('box-active');
    });
  }


  _updateModal(props) {
    this.setState({
      modalContent: props
    });
  }
}
