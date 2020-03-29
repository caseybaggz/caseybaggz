// @flow

import { Link } from 'gatsby';
import styled from 'styled-components';

const Button = styled(Link)(
  props => `
  background-color: ${props.theme.button};
  border-radius: 30px;
  color: ${props.theme.gray1};
  display: inline-block;
  font-weight: 600;
  padding-bottom: 10.5px;
  padding-left: 21px;
  padding-right: 21px;
  padding-top: 10.5px;
  transition: background-color 250ms ease-out;
  text-align: center;
  width: ${props.width || 'initial'};

  &:hover {
    background-color: ${props.theme.gray6};
  }
`
);

export default Button;