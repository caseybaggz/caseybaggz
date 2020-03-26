// @flow

import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Emoji from '../components/Emoji';
import HelmetMeta from '../components/layout/HelmetMeta';
import InfoSection from '../components/layout/InfoSection';
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

      <InfoSection headline="What's the Why?">
        I’m a passionate software engineer with 8.5 years of experience, skilled
        in front-end development with an extensive background in user experience
        and design.
        <br />
        <br />
        When not building products, I love speaking at conferences to help grow
        and challenge the industry, writing blogs of my latest work, and
        contributing to open-source projects.
        <br />
        <br />
        I also love to learn about house plants.
        <Emoji label="plant" symbol="🌿" size="14px" />
      </InfoSection>
    </Layout>
  );
}

export default React.memo(Home);
