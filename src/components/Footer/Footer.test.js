import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Footer from './';


describe('Footer component', () => {

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer />, div);
  });


  // TODO: make a test for the fetch of FooterLinks

});
