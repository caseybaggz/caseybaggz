import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import FooterLink from './';


describe('FooterLink component', () => {

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FooterLink url={ 'test.com' } />, div);
  });

  it('should have a link that opens a new tab for url', () => {
    const wrapper = mount(<FooterLink url="test.com" />);
    expect(wrapper.find('a')).toBeDefined();
  });

});
