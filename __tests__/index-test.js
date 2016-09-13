import React from 'react';
import Index from '../javascripts/components/Index';
import renderer from 'react-test-renderer';


it('should render Index component successfully', () => {
  const tree = renderer.create(<Index />).toJSON();
  expect(tree).toMatchSnapshot();
});
