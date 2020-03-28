// @flow

import styled from 'styled-components';

const SmallHeadline = styled.h6(
  props => `
  color: ${props.theme.gray3};
  font-size: 14px;
  padding-bottom: 10px;
`
);

export default SmallHeadline;