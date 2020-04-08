// @flow

import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import ExternalTextLink from '../components/actions/ExternalTextLink';
import HelmetMeta from '../components/layout/HelmetMeta';
import DetailLayout from '../components/layout/DetailLayout';
import Headline from '../components/typography/Headline';
import SmallHeadline from '../components/typography/SmallHeadline';
import Caption from '../components/typography/Caption';

const Wrapper = styled.div`
  padding-bottom: 24px;
  padding-top: 24px;

  p {
    padding-bottom: 24px;
  }
`;

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
  const { title } = frontmatter;

  return (
    <DetailLayout>
      <HelmetMeta />

      <Headline>{title}</Headline>
      <SmallHeadline>{frontmatter.description}</SmallHeadline>
      <Caption>{frontmatter.dateFrom} to {frontmatter.dateTo}</Caption>
      <ExternalTextLink href={frontmatter.link}>{title}</ExternalTextLink>
      <Wrapper dangerouslySetInnerHTML={{ __html: html }} />
    </DetailLayout>
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
