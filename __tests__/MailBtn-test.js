import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import MailBtn from '../src/components/MailBtn';


describe('MailBtn component', () => {

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MailBtn />, div);
  });

});
