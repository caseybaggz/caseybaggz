import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import NavLink from './';


describe('MainBtn Component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NavLink />, div);
  });

});
