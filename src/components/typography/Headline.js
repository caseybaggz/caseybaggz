// @flow

import styled from 'styled-components';
import media from '../../utils/media';

const headlineFontSize: string = '38px';

const Headline = styled.h3(
  props => `
  color: ${props.theme[props.color] || props.theme.gray3};
  font-size: ${headlineFontSize};

  ${media.large} {
    font-size: ${props.responsive ? '76px' : headlineFontSize};
  }
`
);

export default Headline;