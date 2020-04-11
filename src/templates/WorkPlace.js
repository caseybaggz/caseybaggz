// @flow

import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import ExternalTextLink from '../components/actions/ExternalTextLink';
import HelmetMeta from '../components/layout/HelmetMeta';
import Layout from '../components/layout/Layout';
import Headline from '../components/typography/Headline';
import SmallHeadline from '../components/typography/SmallHeadline';
import Caption from '../components/typography/Caption';

const Wrapper = styled.div`
  padding-bottom: 24px;
  padding-top: 24px;

  h1,h2,h3,h4,h5,h6 {
    padding-bottom: 12px;
  }

  h2 {
    font-size: 24px;
  }

  p {
    padding-bottom: 24px;
  }
`;

const Date = styled(Caption)`
  font-size: 16px;
`;

const LinkWrapper = styled.div(
  (props) => `
  background-color: ${props.theme.button};
  border-radius: 30px;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  padding-bottom: 10.5px;
  padding-left: 21px;
  padding-right: 21px;
  padding-top: 10.5px;
  transition: background-color 250ms ease-out, color 250ms ease-out;
  text-align: center;
  width: 100%;

  &:hover {
    color: ${props.theme.button};
    background-color: ${props.theme.gray4};
  }
`
);

type Props = {
  data: {
    markdownRemark: {
      html: string,
      frontmatter: {
        dateTo: string,
        dateFrom: string,
        description: string,
        link: string,
        title: string
      }
    }
  }
};

function WorkPlace(props: Props): React$Node {
  const { frontmatter, html } = props.data.markdownRemark;
  const { dateFrom, dateTo, title } = frontmatter;
  const isToday: boolean = dateFrom === dateTo;

  return (
    <Layout headline={title}>
      <HelmetMeta />
      <SmallHeadline>{frontmatter.description}</SmallHeadline>
      <Date>
        {dateFrom} to {isToday ? 'Present' : dateTo}
      </Date>
      <Wrapper dangerouslySetInnerHTML={{ __html: html }} />
      <LinkWrapper>
        <ExternalTextLink href={frontmatter.link}>{title}</ExternalTextLink>
      </LinkWrapper>
    </Layout>
  );
}

export const WorkPlaceQuery = graphql`
         query($path: String!) {
           markdownRemark(frontmatter: { path: { eq: $path } }) {
             html
             frontmatter {
               dateFrom(formatString: "MMMM DD, YYYY")
               dateTo(formatString: "MMMM DD, YYYY")
               description
               link
               path
               title
             }
           }
         }
       `;

export default React.memo(WorkPlace);
