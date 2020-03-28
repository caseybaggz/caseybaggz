// @flow

import styled from 'styled-components';
import mobilePattyrn from '../../../images/pattern-mobile.jpg';

const RectangularPattern = styled.div`
  background: url(${mobilePattyrn}) no-repeat center center ${props => props.theme.white};
  background-size: cover;
  height: 76px;
`;

export default RectangularPattern;