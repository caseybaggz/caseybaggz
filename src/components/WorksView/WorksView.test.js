import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import WorksView from './';


describe('WorksView Component', () => {
  const data = { name: 'testItem' };

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WorksView params={ data } />, div);
  });


  it('should have a working back button', () => {
    const page = TestUtils.renderIntoDocument(<WorksView params={ data } />);
    const btn  = TestUtils.findRenderedDOMComponentWithTag(page, 'span');

    expect(ReactDOM.findDOMNode(btn).className).toBe('back-btn');
    expect(ReactDOM.findDOMNode(btn).textContent).toBe('back');

    // similate click
    TestUtils.Simulate.click(btn);

    // make sure link goes to home view
    expect(window.location.href).toBe('about:blank');
  });


  it('should show headline of params.name', () => {
    const page = TestUtils.renderIntoDocument(<WorksView params={ data } />);
    const headline = TestUtils.findRenderedDOMComponentWithTag(page, 'h3');

    expect(ReactDOM.findDOMNode(headline).className).toBe('headline');
    expect(ReactDOM.findDOMNode(headline).textContent).toBe('testItem');
  });


  it('should have a MailBtn component', () => {
    const page = TestUtils.renderIntoDocument(<WorksView params={ data } />);
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
    const page = TestUtils.renderIntoDocument(<WorksView params={ data } />);
    const footer = TestUtils.findRenderedDOMComponentWithTag(page, 'footer');

    expect(ReactDOM.findDOMNode(footer).className).toBe('footer-container');
  });

});
