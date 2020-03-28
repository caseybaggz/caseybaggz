// @flow

import styled from 'styled-components';

const FeatureItem = styled.div(
  props => `
  padding-bottom: 65px;
  padding-left: ${props.theme.featureSidePad};
  padding-right: ${props.theme.featureSidePad};
`
);

export default FeatureItem;