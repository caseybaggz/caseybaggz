// @flow

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Headline from '../typography/Headline';
import ExternalTextLink from '../actions/ExternalTextLink';
import media from '../../utils/media';

const Wrapper = styled.div`
  background-color: ${props => props.theme.gray6};
  bottom: 0;
  height: 100vh;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 0;

  ${media.medium} {
    bottom: initial;
    background-color: transparent;
    height: initial;
    left: 55px;
    padding-top: initial;
    position: absolute;
    right: initial;
    top: 625px;
    width: auto;
    z-index: 1;
  }
`;

const List = styled.ul`
  ${media.medium} {
    align-items: center;
    display: flex;
  }
`;

const ListItem = styled.li`
  height: calc(100vh / 6);

  .external-link {
    background-color: hsl(23, 29%, ${props => 11 * props.eq}%);
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding-left: 24px;
    width: 100%;
  }

  ${media.medium} {
    margin-right: 45px;
  }
`;

type Props = {};

function SocialNav(props: Props): React$Node {
  const data = useStaticQuery(graphql`
    query SocialNavQuery {
      allSocialLinksJson {
        edges {
          node {
            id
            name
            uri
          }
        }
      }
    }
  `);
  const { edges } = data.allSocialLinksJson;
  const LinkItems: Array<React$Node> = React.useMemo(() => {
    return edges.map((edgeItem, eq) => (
      <ListItem key={edgeItem.node.id} eq={eq}>
        <ExternalTextLink href={edgeItem.node.uri} size="24" kind="light">
          {edgeItem.node.name}
        </ExternalTextLink>
      </ListItem>
    ));
  }, []);

  return (
    <Wrapper>
      <List>
        {LinkItems}
      </List>
    </Wrapper>
  );
}

export default React.memo(SocialNav);
