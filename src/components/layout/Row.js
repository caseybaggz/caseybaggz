// @flow

import styled from 'styled-components';

const Row = styled.div(props =>`
  align-items: center;
  display: flex;
  justify-content: ${props.justify || 'initial'};
  width: ${props.width || '100%'};
`);

export default Row;