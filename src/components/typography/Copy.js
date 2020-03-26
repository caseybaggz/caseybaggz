// @flow

import styled from 'styled-components';

const Copy = styled.p(
  props => `
  color: ${props.theme[props.color]};
  font-family: ${props.theme.bodyFont};
  font-size: 14px;
  line-height: 1.6;
`
);

export default Copy;
