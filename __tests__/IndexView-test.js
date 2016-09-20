import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import IndexView from '../src/components/IndexView';


describe('IndexView Component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<IndexView />, div);
  });


  it('has a medium blog link', () => {
    const page = TestUtils.renderIntoDocument(<IndexView />);
    const button = TestUtils.findRenderedDOMComponentWithTag(page, 'a');

    expect(ReactDOM.findDOMNode(button).href).toBe('https://medium.com/@caseybaggz');
    expect(ReactDOM.findDOMNode(button).textContent).toBe('');

    // similate click
    TestUtils.Simulate.click(button);

    // make sure link goes to new tab
    expect(window.location.href).toBe('about:blank');
  });


  it('has a caseybaggz logo', () => {
    const page = TestUtils.renderIntoDocument(<IndexView />);
    const logo = TestUtils.findRenderedDOMComponentWithTag(page, 'img');

    expect(ReactDOM.findDOMNode(logo).className).toBe('img');
    expect(ReactDOM.findDOMNode(logo).alt).toBe('logo');
  });

});
