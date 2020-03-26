// @flow

import React from 'react';
import styled from 'styled-components';

const EmojiSpan = styled.span`
  font-size: ${props => (props.size ? props.size : 'inherit')};
`;

type Props = {
  label: string,
  size: string,
  symbol: string
};

function Emoji(props: Props): React.Node {
  return (
    <EmojiSpan
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ''}
      aria-hidden={props.label ? 'false' : 'true'}
      size={props.size}
    >
      {props.symbol}
    </EmojiSpan>
  );
}

Emoji.defaultProps = {
  label: 'party popper',
  size: '16px',
  symbol: '🎉'
};

export default React.memo(Emoji);
