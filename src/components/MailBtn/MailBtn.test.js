import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import MailBtn from './';


describe('MailBtn component', () => {

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MailBtn />, div);
  });

  it('should say "let\'s talk"', () => {
    const wrapper = shallow(<MailBtn />);
    expect(wrapper.find('.mail-btn').text()).not.toBeNull();
    expect(wrapper.find('.mail-btn').text()).toBeDefined();
    expect(wrapper.find('.mail-btn').text()).toEqual("let's talk");
    expect(wrapper.find('.mail-btn').text()).not.toEqual('');
  });

});
