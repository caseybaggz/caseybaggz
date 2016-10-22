import React from 'react';
import ReactDOM from 'react-dom';
import { StyleSheetTestUtils } from 'aphrodite';
import { mount } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import HomeView from './';


describe('HomeView Component', () => {

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HomeView />, div);
  });

  it('should have a headline title', () => {
    const wrapper = mount(<HomeView />);
    expect(wrapper.find('.HomeView-sub-headline')).not.toBeNull();
    expect(wrapper.find('.HomeView-sub-headline')).toBeDefined();
    expect(wrapper.find('.HomeView-sub-headline').text()).toEqual('FE-Engineer & Speaker');
    expect(wrapper.find('.HomeView-sub-headline').text()).not.toEqual('');
  });

  it('should have a MailBtn component', () => {
    const page = TestUtils.renderIntoDocument(<HomeView />);
    const btn  = TestUtils.findRenderedDOMComponentWithClass(page, 'mail-btn');

    expect(ReactDOM.findDOMNode(btn).className).toBe('btn mail-btn');
    expect(ReactDOM.findDOMNode(btn).href).toBe('mailto:caseybaggz@gmail.com');
    expect(ReactDOM.findDOMNode(btn).textContent).toBe("let's talk");

    // similate click
    TestUtils.Simulate.click(btn);

    // make sure link goes to home view
    expect(window.location.href).toBe('about:blank');
  });

  it('should have a Footer component', () => {
    const page = TestUtils.renderIntoDocument(<HomeView />);
    const footer = TestUtils.findRenderedDOMComponentWithTag(page, 'footer');

    expect(ReactDOM.findDOMNode(footer).className).toBe('Footer');
  });

});
