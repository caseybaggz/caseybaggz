// @flow

import styled from 'styled-components';
import media from '../../utils/media';

const Headline = styled.h3(
  props => `
  color: ${props.theme[props.color] || props.theme.gray3};
  font-size: 32px;

  ${media.large} {
    font-size: ${props.responsive ? '64px' : '32px'};
  }
`
);

export default Headline;