// @flow

import styled from 'styled-components';
import mobilePattyrn from '../../../images/pattern-mobile.jpg';
import desktopPattyrn from '../../../images/pattern-desktop.jpg';
import media from '../../../utils/media.js';

const RectangularPattern = styled.div`
  background: url(${mobilePattyrn}) no-repeat center center
    ${props => props.theme.white};
  background-size: cover;
  height: 76px;

  ${media.large} {
    background: url(${desktopPattyrn}) no-repeat center center
      ${props => props.theme.white};
    background-size: cover;
  }
`;

export default RectangularPattern;