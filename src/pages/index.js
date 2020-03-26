// @flow

import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout/Layout';
import HelmetMeta from '../components/layout/HelmetMeta';

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
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="casey baggz in norway"
      />
    </Layout>
  );
}

export default React.memo(Home);
