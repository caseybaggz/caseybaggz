// @flow

import React from 'react';
import styled from 'styled-components';
import Headline from '../typography/Headline';
import ExternalTextLink from '../actions/ExternalTextLink';
import media from '../../utils/media';

const Wrapper = styled.div`
  background-color: ${props => props.theme.gray5};
  bottom: 0;
  height: 100vh;
  left: 0;
  padding-left: 24px;
  padding-top: 124px;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 0;
`;

const Title = styled(Headline)`
  ${media.medium} {
    display: none;
  }
`;

const List = styled.ul`
  padding-top: 45px;
`;

const ListItem = styled.li`
  margin-bottom: 45px;
`;

type Props = {};

function SocialNav(props: Props): React$Node {
  const LinkItems: Array<React$Node> = React.useMemo(() => {
    return (
      <ListItem>
        <ExternalTextLink href="">Twitter</ExternalTextLink>
      </ListItem>
    );
  }, []);

  return (
    <Wrapper>
      <Title>Social</Title>
      <List>
        {LinkItems}
      </List>
    </Wrapper>
  );
}

export default React.memo(SocialNav);
