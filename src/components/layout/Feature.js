// @flow

import React from 'react';
import styled from 'styled-components';
import Emoji from '../Emoji';
import Button from '../actions/Button';
import Navicon from '../actions/Navicon';
import SmallHeadline from '../typography/SmallHeadline';
import Headline from '../typography/Headline';
import media from '../../utils/media';

const Wrapper = styled.div`
  background-color: ${props => props.theme.black};
  bottom: 0;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  padding-left: 31px;
  padding-right: 31px;
  padding-top: 95px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;

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

type Props = {
  onClick: () => {}
};

function Feature(props: Props): React$Node {
  return (
    <Wrapper>
      <Navicon onClick={props.onClick} />

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
}

Feature.defaultProps = {
  onClick: () => {}
};

export default React.memo(Feature);