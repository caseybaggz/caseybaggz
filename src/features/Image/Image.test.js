import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Image from './';


describe('<Image />', () => {
  const props = {
    src: 'test.png'
  };

  const wrapper = mount(<Image { ...props } />);


  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Image />, div);
  });

  // COMPONENT

  it('should add a "fadeIn" class when run', () => {
    const func = wrapper.instance()._loadImage;
    const el = wrapper.find('Image');

    expect(func).not.toBeNull();
    expect(func).toBeDefined();
    expect(() => func()).not.toThrow();

    // load image
    el.simulate('load');

    setTimeout(() => {
      expect(wrapper.find('Image.fadeIn').length).not.toEqual(0);
      expect(wrapper.find('Image.fadeIn').length).toEqual(1);
    }, 400);
  });

});
