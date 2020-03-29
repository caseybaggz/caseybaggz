// @flow

import React from 'react';
import styled from 'styled-components';
import LaunchIcon from '../icons/Launch';

const LinkItem = styled.a`
  display: inline-block;
  margin-left: 5px;
  text-decoration: underline;
  transition: color 250ms ease-out;

  &:hover {
    color: ${props => props.theme.button};
  }
`;

const IconWrapper = styled.span`
  display: inline-block;
  margin-left: 3px;
  width: 11px;
`;

type Props = {
  children: any,
  href: string
};

function ExternalTextLink(props: Props): React$Node {
  return (
    <LinkItem className="external-link" href={props.href} target="_blank" rel="noopener noreferrer">
      {props.children}
      <IconWrapper>
        <LaunchIcon />
      </IconWrapper>
    </LinkItem>
  );
}

ExternalTextLink.defaultProps = {
  href: ''
};

export default React.memo(ExternalTextLink);