import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import HomeView from '../src/components/HomeView';


describe('HomeView Component', () => {

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HomeView />, div);
  });


  it('should have a headline title', () => {
    const page = TestUtils.renderIntoDocument(<HomeView />);
    const headline = TestUtils.findRenderedDOMComponentWithClass(page, 'sub-headline');

    expect(ReactDOM.findDOMNode(headline).textContent).toBe('React & RailsCreative Developer');
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

    expect(ReactDOM.findDOMNode(footer).className).toBe('footer-container');
  });

});
