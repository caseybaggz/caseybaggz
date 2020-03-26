// @flow

import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Layout from '../components/layout/Layout';
import HelmetMeta from '../components/layout/HelmetMeta';

const ImageWrapper = styled.div`
  padding: 18px;
`;

type Props = {};

function Home(props: Props): React$Node {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "home-feature.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <HelmetMeta />
      <ImageWrapper>
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="casey baggz in norway"
        />
      </ImageWrapper>
    </Layout>
  );
}

export default React.memo(Home);
