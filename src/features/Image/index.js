import React, { Component } from 'react';
import './Image.css';


export default class Image extends Component {
  _loadImage = () => {
    if (!!this.img) {
      this.img.classList.add('fadeIn');
    }
  }


  render() {
    const { alt, src, ...props } = this.props;

    if (!!!src) {
      return null;
    }

    return(
      <img
        { ...props }
        alt={ alt }
        className="Image animated"
        onLoad={ this._loadImage }
        ref={ el => el = this.img = el }
        src={ src }
      />
    );
  }
}
