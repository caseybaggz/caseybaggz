import React, { Component } from 'react';
import logo from '../images/logos/baggz.svg';
import '../stylesheets/IndexView.css';


export default class IndexView extends Component {
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
          <img className="img" src={ logo } alt="logo" />
        </span>

        <div className="view-content">
          { this.props.children }
        </div>
      </div>
    );
  }


  // PRIVATE
}
