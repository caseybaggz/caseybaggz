import React, { Component } from 'react';
import NavLink from './NavLink';
import lays from '../images/backgrounds/lays.png';
import thrive from '../images/backgrounds/thrive.png';
import '../stylesheets/RecentItem.css';


export default class RecentItem extends Component {
  render() {
    const itemStyle = {
      backgroundImage: `url(../images/backgrounds/${ this.props.name }.png)`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundColor: '#fff',
      backgroundSize: 'cover'
    };

    return (
      <div className={ `c-recent-item ${ this.props.name }` } style={ itemStyle }>
        <NavLink to={ `/works/${ this.props.name }` } className="link">
          <span className="info">
            <p className="type">{ this.props.stack }</p>
          </span>
        </NavLink>
      </div>
    );
  }
}
