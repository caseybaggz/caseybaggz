// @flow

import styled from 'styled-components';

const Caption  = styled.figcaption`
  color: ${props => props.theme.captionText};
  font-family: ${props => props.theme.captionFont};
  font-size: 10px;
`;

export default Caption;
