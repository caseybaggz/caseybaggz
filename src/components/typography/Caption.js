// @flow

import styled from 'styled-components';
import Copy from './Copy';

const Caption = styled(Copy)`
  color: ${props => props.theme.gray2};
  font-size: 12px;
  padding-top: 11px;
`;

export default Caption;