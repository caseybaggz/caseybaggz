// @flow

import styled from 'styled-components';
import media from '../../utils/media';

const SmallHeadline = styled.h6(
  props => `
  color: ${props.theme.gray3};
  font-size: 18px;
  padding-bottom: 10px;

  ${media.large} {
    font-size: 24px;
  }
`
);

export default SmallHeadline;