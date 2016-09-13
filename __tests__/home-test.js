import React from 'react';
import Home from '../javascripts/components/Home';
import renderer from 'react-test-renderer';


it('should render Home component successfully', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
