// @flow

import React from 'react';
import styled from 'styled-components';

const EmojiSpan = styled.span(
  props => `
  font-size: ${props.size ? props.size : 'inherit'};
  margin-left: ${props.noMargin ? 'initial' : '7px'};
`
);

type Props = {
  label: string,
  noMargin?: boolean,
  size?: string,
  symbol: string
};

function Emoji(props: Props) {
  return (
    <EmojiSpan
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ''}
      aria-hidden={props.label ? 'false' : 'true'}
      noMargin={props.noMargin}
      size={props.size}
    >
      {props.symbol}
    </EmojiSpan>
  );
}

Emoji.defaultProps = {
  noMargin: false,
  label: 'party popper',
  size: '16px',
  symbol: '🎉'
};

export default React.memo<Props>(Emoji);
