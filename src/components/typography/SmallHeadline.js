// @flow

import styled from 'styled-components';
import media from '../../utils/media';

const smallHeadlineFontSize: string = '18px';

const SmallHeadline = styled.h6(
  props => `
  color: ${props.theme.gray3};
  font-size: ${smallHeadlineFontSize};
  padding-bottom: 10px;

  ${media.large} {
    font-size: ${props.responsive ? '24px' : smallHeadlineFontSize};
  }
`
);

export default SmallHeadline;