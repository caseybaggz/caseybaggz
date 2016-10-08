import React, { Component } from 'react';
import laysImg from '../../images/works/lays.png';
import thriveImg from '../../images/works/thrive.png';


export default class WorksFeatureImg extends Component {
  constructor() {
    super();

    // cache methods
    this._getImgUrl = this._getImgUrl.bind(this);
  }

  render() {
    const imgUrl = this._getImgUrl();

    return (
      <div className="item-container animated">
        <img src={ imgUrl } className="img" alt="feature" />
      </div>
    );
  }


  // PRIVATE

  _getImgUrl() {
    switch (this.props.name) {
      case 'lays':
        return laysImg;
      case 'thrive':
        return thriveImg;
      default:
        return thriveImg;
    }
  }
}
