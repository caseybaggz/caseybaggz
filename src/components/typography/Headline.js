// @flow

import styled from 'styled-components';

const Headline = styled.h3(
  props => `
  color: ${props.theme[props.color] || props.theme.darkText};
  font-family: ${props.theme.bodyFont};
  font-size: 32px;
`
);

export default Headline;