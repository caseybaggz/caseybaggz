// @flow

import styled from 'styled-components';

const Copy = styled.p(
  props => `
  color: ${props.theme[props.color] || props.theme.darkText};
  font-family: ${props.theme.bodyFont};
  font-weight: ${props.weight || 400};
`
);

export default Copy;
