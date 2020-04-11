// @flow

import styled from 'styled-components';

const Copy = styled.p(
  props => `
  color: ${props.theme[props.color] || props.theme.darkText};
  font-size: 18px;
  font-weight: ${props.weight || 400};
  line-height: 1.5;
`
);

export default Copy;
