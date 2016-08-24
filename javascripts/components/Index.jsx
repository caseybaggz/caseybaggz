import React from 'react';


export default class Index extends React.Component {
  constructor() {
    super();

    this.state = {
      navActive: false
    };

    // cache methods
    this._closeNav   = this._closeNav.bind(this);
    this._triggerNav = this._triggerNav.bind(this);
  }


  componentDidMount() {
    const container = document.querySelector('.index-view-container');

    window.setTimeout(() => {
      container.classList.add('fadeIn');
    }, 1000);
  }


  render() {
    return (
      <div className="index-view-container animated">
        <div className="blog-link-wrapper">
          <a href="https://medium.com/@caseybaggz" target="_blank" className="link" />
        </div>

        <span className="logo-container">
          <img className="img" src="./images/logos/baggz.svg" />
        </span>

        <div className="view-content">
          { this.props.children }
        </div>
      </div>
    );
  }


  // PRIVATE

  _closeNav() {
    this.setState({
      navActive: false
    });
  }

  _triggerNav() {
    const active = this.state.navActive;

    if (active) {
      this._closeNav();
    } else {
      this.setState({
        navActive: true
      });
    }
  }
}
