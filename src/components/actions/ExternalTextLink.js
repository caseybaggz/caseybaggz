// @flow

import React from 'react';
import styled from 'styled-components';
import Row from '../layout/Row';
import LaunchIcon from '../icons/Launch';

const LinkItem = styled.a(
  (props) => `
  display: inline-block;
  transition: color 250ms ease-out;

  &:hover {
    color: ${props.theme.button};
  }
`
);

const LinkText = styled.span(
  (props) => `
  color: ${props.theme[props.color]};
  display: inline-block;
  padding-left: 5px;
  font-size: ${props.size}px;
`
);

const IconWrapper = styled.span(
  (props) => `
  display: inline-block;
  line-height: 0;
  margin-left: calc(${props.size}px - ${props.size * 0.7}px);
  opacity: 0.6;
  width: ${props.size * 0.65}px;
`
);

type Props = {
  children: any,
  href: string,
  kind?: string,
  linkText?: string,
  size?: string
};

function ExternalTextLink(props: Props) {
  const { size } = props;
  const color: string = `${props.kind || ''}Text`;

  return (
    <LinkItem
      className="external-link"
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Row className="external-row">
        {props.children}
        <LinkText color={color} size={size}>
          {props.linkText}
        </LinkText>
        <IconWrapper size={size}>
          <LaunchIcon color={color} />
        </IconWrapper>
      </Row>
    </LinkItem>
  );
}

ExternalTextLink.defaultProps = {
  href: '',
  kind: 'dark',
  linkText: '',
  size: '16'
};

export default React.memo<Props>(ExternalTextLink);