// @flow

import React from 'react';
import styled from 'styled-components';
import Row from '../layout/Row';
import LaunchIcon from '../icons/Launch';

const LinkItem = styled.a(
  (props) => `
  display: inline-block;
  font-size: ${props.size}px;
  margin-left: 5px;
  text-decoration: underline;
  transition: color 250ms ease-out;

  &:hover {
    color: ${props.theme.button};
  }
`
);

const IconWrapper = styled.span(
  (props) => `
  display: inline-block;
  margin-left: calc(${props.size}px - ${props.size * 0.7}px);
  width: ${props.size * 0.65}px;
`
);

type Props = {
  children: any,
  href: string,
  size?: string
};

function ExternalTextLink(props: Props): React$Node {
  const { size } = props;

  return (
    <LinkItem
      className="external-link"
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      size={size}
    >
      {props.children}
      <IconWrapper size={size}>
        <LaunchIcon />
      </IconWrapper>
    </LinkItem>
  );
}

ExternalTextLink.defaultProps = {
  href: '',
  size: '16'
};

export default React.memo(ExternalTextLink);