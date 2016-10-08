import React from 'react';
import ReactDOM from 'react-dom';
import { StyleSheetTestUtils } from 'aphrodite';
import TestUtils from 'react-addons-test-utils';
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
    const page = TestUtils.renderIntoDocument(<FooterLink url={ 'test.com' } />);
    const btn  = TestUtils.findRenderedDOMComponentWithClass(page, 'link');

    expect(ReactDOM.findDOMNode(btn).className).toBe('link');
    expect(ReactDOM.findDOMNode(btn).href).toBe('test.com');
    expect(ReactDOM.findDOMNode(btn).textContent).toBe('');

    // similate click
    TestUtils.Simulate.click(btn);

    // make sure link goes to home view
    expect(window.location.href).toBe('about:blank');
  });

});
