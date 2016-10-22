import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Footer from './';


describe('Footer component', () => {

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer />, div);
  });

  it('should have a _getItems private method', () => {
    const wrapper  = mount(<Footer />);
    const instance = wrapper.instance();
    expect(instance._getItems).not.toBeNull();
    expect(instance._getItems).toBeDefined();
  });

  it('should render footer links into the Component', () => {
    const wrapper  = mount(<Footer />);
    expect(wrapper.find('a').length).toEqual(4);
  });

});
