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

  it('should have a name prop', () => {
    const wrapper = mount(<FooterLink name="test" />);
    expect(wrapper.props().name).not.toBeNull();
    expect(wrapper.props().name).toBeDefined();
    expect(wrapper.props().name).toEqual('test');
    expect(wrapper.props().name).not.toEqual('');
  });

  it('should have a url prop', () => {
    const wrapper = mount(<FooterLink url="/test" />);
    expect(wrapper.props().url).not.toBeNull();
    expect(wrapper.props().url).toBeDefined();
    expect(wrapper.props().url).toEqual('/test');
    expect(wrapper.props().url).not.toEqual('#');
  });

  it('should have a default url prop of "#"', () => {
    const wrapper = mount(<FooterLink />);
    expect(wrapper.props().url).not.toBeNull();
    expect(wrapper.props().url).toBeDefined();
    expect(wrapper.props().url).toEqual('#');
    expect(wrapper.props().url).not.toEqual('');
  });

  it('should have a link that opens a new tab for url', () => {
    const wrapper = mount(<FooterLink url="test.com" />);
    expect(wrapper.find('a')).toBeDefined();
  });

});
