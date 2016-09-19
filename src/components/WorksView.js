import 'whatwg-fetch';
import React, { Component } from 'react';
import Footer from './Footer';
import WorksFeatureImg from './WorksFeatureImg';
import FetchHelper from '../classes/FetchHelper';
import '../stylesheets/WorksView.css';


export default class WorksView extends Component {
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

    fetch('https://raw.githubusercontent.com/caseybaggz/caseybaggz/update-paths/api/works.json')
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
          <WorksFeatureImg { ...this.props.params } />
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
              <a href="mailto:caseybaggz@gmail.com" className="btn">lets talk</a>
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

    for (var i = 0; i < item.content.length; i++) {
      descArray.push(item.content[i]);
    }

    this.setState({
      link: item.url,
      description: descArray
    });
  }
}
