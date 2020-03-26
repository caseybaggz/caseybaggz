// @flow

import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import HelmetMeta from '../components/layout/HelmetMeta';
import Layout from '../components/layout/Layout';
import Row from '../components/layout/Row';
import Headline from '../components/typography/Headline';
import Caption from '../components/typography/Caption';
import Copy from '../components/typography/Copy';
import MapPin from '../components/icons/MapPin';

const FeatureWrapper = styled.div`
  position: relative;
`;

const HeadlineWrapper = styled.div`
  background-color: ${props => props.theme.black};
  bottom: 88px;
  left: 0;
  padding-bottom: 10px;
  padding-left: 17.38px;
  padding-right: 69px;
  padding-top: 10px;
  position: absolute;
  z-index: 1;
`;

const SubHeadline = styled(Copy)`
  bottom: 54px;
  font-size: 13px;
  padding-left: 34px;
  padding-right: 34px;
  position: absolute;
  text-align: center;
  text-shadow: ${props => props.theme.darkText} 0 0 10px;
  width: 100%;
  z-index: 1;
`;

const CaptionRow = styled(Row)`
  padding-right: 38px;
  padding-top: 6px;
  text-align: right;
`;

const ImageWrapper = styled.figure`
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

      <FeatureWrapper>
        <HeadlineWrapper>
          <Headline color="lightText">
            Hello,
            <br />
            I'm Casey Baggz
          </Headline>
        </HeadlineWrapper>

        <SubHeadline color="lightText">
          Lead Frontend Dev / Technical Product Owner
        </SubHeadline>

        <ImageWrapper>
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="casey baggz in norway"
          />
          <CaptionRow justify="flex-end">
            <MapPin />
            <Caption>Mt.Fløyen, Bergen, Norway</Caption>
          </CaptionRow>
        </ImageWrapper>
      </FeatureWrapper>
    </Layout>
  );
}

export default React.memo(Home);
