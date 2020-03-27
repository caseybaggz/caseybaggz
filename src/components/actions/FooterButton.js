// @flow

import styled from 'styled-components';

const FooterButton = styled.a(
  props => `
  border: 1px solid ${props.theme.border};
  border-radius: 30px;
  display: inline-block;
  font-family: ${props.theme.bodyFont};
  font-size: 14px;
  padding-bottom: 3px;
  padding-left: 21px;
  padding-right: 21px;
  padding-top: 3px;
  text-transform: capitalize;
  transition: background-color 250ms ease-out, color 250ms ease-out, border-color 250ms ease-out;

  &:hover {
    background-color: ${props.theme.black};
    border-color: ${props.theme.black};
    color: ${props.theme.lightText};
  }
`
);

export default FooterButton;