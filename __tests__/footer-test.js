import React from 'react';
import Footer from '../javascripts/components/Footer';
import renderer from 'react-test-renderer';


it('should render Footer component successfully', () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
