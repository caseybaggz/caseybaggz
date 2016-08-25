import React from 'react';
import { Description } from '../Description';

export default class Works extends React.Component {
  constructor() {
    super();

    this.state = {
      link: ''
    };
  }

  componentDidMount() {
    const item = document.querySelector('.item-container');
    const txtContainer = document.querySelector('.description');
    const description  = Description[this.props.params.name];
    const newLink = Description[this.props.params.name + 'Link'];

    txtContainer.innerHTML = description;
    this.setState({ link: newLink });

    window.setTimeout(() => {
      item.classList.add('fadeInDown');
    }, 800);
  }

  render() {
    return (
      <div className="works-view-container">
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
          <p className="description" />

          <div className="cta-wrapper">
            <div className="btn-wrapper">
              <a href="mailto:caseybaggz@gmail.com" className="btn">let's talk</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
