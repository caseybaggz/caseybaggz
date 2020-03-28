// @flow

import React from 'react';
import styled from 'styled-components';
import Emoji from '../Emoji';
import Button from '../actions/Button';
import SmallHeadline from '../typography/SmallHeadline';
import Headline from '../typography/Headline';
import media from '../../utils/media';

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 375px;
  left: 31px;
  position: fixed;
  top: 105px;

  ${media.medium} {
    max-width: initial;
    left: 52px;
    top: 205px;
    width: 100%;
  }
`;

const ButtonWrapper = styled.div`
  padding-top: 25px;

  ${media.medium} {
    padding-top: 46px;
  }
`;

const featureContent: React$Node = (
  <Wrapper>
    <SmallHeadline responsive>Hi there!</SmallHeadline>
    <Headline color="gray6" responsive>
      Headline that
      <br />
      prompts you to do
      <br />
      something.
      <Emoji label="snooze" size="32px" symbol="😴" />
    </Headline>

    <ButtonWrapper>
      <Button to="/contact">Contact Me</Button>
    </ButtonWrapper>
  </Wrapper>
);

type Props = {};

function Feature(props: Props): React$Node {
  return featureContent;
}

export default React.memo(Feature);