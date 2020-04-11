// @flow

import styled from 'styled-components';
import media from '../../utils/media';

const Headline = styled.h3(
  props => `
  color: ${props.theme[props.color] || props.theme.gray3};
  font-size: 38px;

  ${media.medium} {
    font-size: 76px;
  }
`
);

export default Headline;