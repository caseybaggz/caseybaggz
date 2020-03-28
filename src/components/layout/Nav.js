// @flow

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby';

type LinkType = {
  id: string,
  label: string,
  to: string
};

const linkData: Array<LinkType> = [
  { id: '0', label: 'Home', to: '/' },
  { id: '1', label: 'Werk', to: '/work' },
  { id: '2', label: 'Blog', to: '/blog' },
  { id: '3', label: 'Contact', to: '/contact' }
];

const NavList = styled.ul(
  props => `
  align-items: center;
  display: flex;
  padding-bottom: 60px;
  padding-left: ${props.theme.featureSidePad};
  padding-right: ${props.theme.featureSidePad};
`
);

const NavItem = styled.li`
  margin-right: 35px;

  &:last-of-type {
    margin-right: initial;
  }
`;

const animateIn = keyframes`
  from {
    width: 0;
  }

  to {
    width: 18px;
  }
`;

const LinkItem = styled(Link)`
  color: ${props => props.theme.darkText};
  display: inline-block;
  font-size: 14px;
  font-weight: 400;
  padding-bottom: 10px;
  position: relative;

  &.active {
    &::after {
      animation: ${animateIn} 250ms ease-out;
      animation-fill-mode: forwards;
      bottom: 0;
      content: '';
      background-color: ${props => props.theme.green3};
      border-radius: 15px;
      display: block;
      height: 3px;
      left: 0;
      margin-left: auto;
      margin-right: auto;
      position: absolute;
      right: 0;
      width: 0;
    }
  }
`;

type Props = {};

function Nav(props: Props): React$Node {
  const linkItems: Array<React$Node> = React.useMemo(() => {
    return linkData.map(link => (
      <NavItem key={link.id}>
        <LinkItem activeClassName="active" to={link.to}>
          {link.label}
        </LinkItem>
      </NavItem>
    ));
  }, []);

  return (
    <nav>
      <NavList>{linkItems}</NavList>
    </nav>
  );
}

export default React.memo(Nav);