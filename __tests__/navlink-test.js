import React from 'react';
import NavLink from '../javascripts/components/NavLink';
import renderer from 'react-test-renderer';


it('should render NavLink component successfully', () => {
  const tree = renderer.create(<NavLink to="/works/lays" />).toJSON();
  expect(tree).toMatchSnapshot();
});
