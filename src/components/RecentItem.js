import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import NavLink from './NavLink';
import laysBg from '../images/backgrounds/lays.png';
import thriveBg from '../images/backgrounds/thrive.png';
import '../stylesheets/RecentItem.css';


const itemBackground = StyleSheet.create({
  lays: {
    backgroundImage: `url(${ laysBg })`
  },
  thrive: {
    backgroundImage: `url(${ thriveBg })`
  }
});


export default class RecentItem extends Component {
  render() {
    const itemStyle = {
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundColor: '#fff',
      backgroundSize: 'cover'
    };

    return (
      <div className={ 'c-recent-item ' + css(itemBackground[this.props.name]) } style={ itemStyle }>
        <NavLink to={ `/works/${ this.props.name }` } className="link">
          <span className="info">
            <p className="type">{ this.props.stack }</p>
          </span>
        </NavLink>
      </div>
    );
  }
}
