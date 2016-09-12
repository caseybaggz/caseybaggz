import 'whatwg-fetch';
import React from 'react';
import Footer from './Footer';
import FetchHelper from '../FetchHelper';

export default class Works extends React.Component {
  constructor() {
    super();

    this.state = {
      link: '',
      name: '',
      description: []
    };

    // cache methods
    this._goBack = this._goBack.bind(this);
    this._updateData = this._updateData.bind(this);
  }


  componentDidMount() {
    const item = document.querySelector('.item-container');

    fetch('./works.json')
      .then(FetchHelper.status)
      .then(FetchHelper.parseJSON)
      .then(this._updateData);

    window.setTimeout(() => {
      item.classList.add('fadeInDown');
    }, 800);
  }


  render() {
    return (
      <div className="works-view-container">
        <span className="back-btn" onClick={ this._goBack }>back</span>

        <div className="feature">
          <div className="item-container animated">
            <img src={ './images/works/' + this.props.params.name + '.png' } className="img" />
          </div>
        </div>

        <div className="main-section">
          <h3 className="headline">{ this.props.params.name }</h3>
          <div className="link-container">
            <a href={ this.state.link } className="link" target="_blank">visit site</a>
          </div>

          <div className="description">
            {
              this.state.description.map((p, index) => (
                <p key={ index }>{ p }</p>
              ))
            }
          </div>

          <div className="cta-wrapper">
            <div className="btn-wrapper">
              <a href="mailto:caseybaggz@gmail.com" className="btn">let's talk</a>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    );
  }


  // PRIVATE

  _goBack() {
    window.history.back();
  }


  _updateData(data) {
    const descArray = [];
    const item = data.find(item => (
      item.name === this.props.params.name
    ));

    item.content.map(paragraph => {
      descArray.push(paragraph);
    });

    this.setState({
      link: item.url,
      description: descArray
    });
  }
}
