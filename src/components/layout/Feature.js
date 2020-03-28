// @flow

import React from 'react';
import styled from 'styled-components';
import Emoji from '../Emoji';
import Button from '../actions/Button';
import SmallHeadline from '../typography/SmallHeadline';
import Headline from '../typography/Headline';

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 375px;
  padding-bottom: 78px;
  padding-left: 31px;
  padding-right: 31px;
  padding-top: 75px;
`;

const ButtonWrapper = styled.div`
  padding-top: 25px;
`;

const featureContent: React$Node = (
  <Wrapper>
    <SmallHeadline>Hi there!</SmallHeadline>
    <Headline color="gray6">
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