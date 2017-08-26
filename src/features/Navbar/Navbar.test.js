import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Navbar from './';


describe('<Navbar />', () => {
  const _Navbar = <Navbar />;

  const wrapper = mount(_Navbar)

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(_Navbar, div);
  });

  // COMPONENT

  it('should have a links prop available to the class', () => {
    const prop = wrapper.instance().links;
    const result = [
      { id: 0, text: 'posts', url: 'https://medium.com/@caseybaggz' },
      { id: 1, text: 'speaking', url: 'https://medium.com/@caseybaggz/post-squares-conf-2016-5ecac18387c' }
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
    expect(el).toEqual(3);
  });

});
