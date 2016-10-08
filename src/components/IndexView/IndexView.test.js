import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import IndexView from './';


describe('IndexView Component', () => {

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<IndexView />, div);
  });


  it('should have a medium blog link', () => {
    const page = TestUtils.renderIntoDocument(<IndexView />);
    const button = TestUtils.findRenderedDOMComponentWithTag(page, 'a');

    expect(ReactDOM.findDOMNode(button).href).toBe('https://medium.com/@caseybaggz');
    expect(ReactDOM.findDOMNode(button).textContent).toBe('');

    // similate click
    TestUtils.Simulate.click(button);

    // make sure link goes to new tab
    expect(window.location.href).toBe('about:blank');
  });


  it('should have a caseybaggz logo', () => {
    const page = TestUtils.renderIntoDocument(<IndexView />);
    const logo = TestUtils.findRenderedDOMComponentWithTag(page, 'img');

    expect(ReactDOM.findDOMNode(logo).className).toBe('img');
    expect(ReactDOM.findDOMNode(logo).alt).toBe('logo');
  });

});
