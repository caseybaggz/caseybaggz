import React from 'react';
import ReactDOM from 'react-dom';

import { mount } from 'enzyme';

import {
  Github,
  LinkedIn,
  Twitter,
  s6
} from 'images';

import Footer from './';


describe('<Footer />', () => {
  const _Footer = <Footer />;

  const wrapper = mount(_Footer)

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(_Footer, div);
  });

  // COMPONENT

  it('should have a links prop available to the class', () => {
    const prop = wrapper.instance().links;
    const result = [
      { id: 0, img: Github, url: 'https://github.com/caseybaggz' },
      { id: 1, img: LinkedIn, url: 'https://www.linkedin.com/in/caseybaggz/' },
      { id: 2, img: Twitter, url: 'https://twitter.com/caseybaggz' },
      { id: 3, img: s6, url: 'https://society6.com/zart' }
    ];

    expect(prop).not.toBeNull();
    expect(prop).toBeDefined();
    expect(prop).not.toEqual([]);
    expect(prop).toEqual(result);
  });

  it('should display 3 links in the UI', () => {
    const el = wrapper.find('a').length;
    expect(el).not.toBeNull();
    expect(el).toBeDefined();
    expect(el).not.toEqual(0);
    expect(el).toEqual(4);
  });

});
