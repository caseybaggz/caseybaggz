import React from 'react';
import ReactDOM from 'react-dom';
import { StyleSheetTestUtils } from 'aphrodite';
import { mount } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import HomeView from './';
import MailBtn from '../MailBtn';
import Footer from '../Footer';


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
    const wrapper = mount(<HomeView />);
    expect(wrapper.contains(<MailBtn />)).toEqual(true);
    expect(wrapper.contains(<MailBtn />)).not.toEqual(false);
  });

  it('should have a Footer component', () => {
    const wrapper = mount(<HomeView />);
    expect(wrapper.contains(<Footer />)).toEqual(true);
    expect(wrapper.contains(<Footer />)).not.toEqual(false);
  });

});
