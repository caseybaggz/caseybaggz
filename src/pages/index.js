// @flow

import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Emoji from '../components/Emoji';
import Footer from '../components/layout/Footer';
import HelmetMeta from '../components/layout/HelmetMeta';
import InfoSection from '../components/layout/InfoSection';
import Layout from '../components/layout/Layout';
import Row from '../components/layout/Row';
import Headline from '../components/typography/Headline';
import SubHeadline from '../components/typography/SubHeadline';
import Caption from '../components/typography/Caption';
import Copy from '../components/typography/Copy';
import MapPin from '../components/icons/MapPin';
import media from '../utils/media';

const mediumLayouts: string = media.medium;

const TwoColLayout = styled.div`
  ${mediumLayouts} {
    display: flex;
    width: 100%;
  }
`;

const FeatureWrapper = styled.div`
  position: relative;

  ${mediumLayouts} {
    width: 50%;
  }
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

  ${mediumLayouts} {
    bottom: 188px;
  }
`;

const PhotoText = styled(Copy)`
  bottom: 54px;
  font-size: 13px;
  padding-left: 34px;
  padding-right: 34px;
  position: absolute;
  text-align: center;
  text-shadow: ${props => props.theme.darkText} 0 0 10px;
  width: 100%;
  z-index: 1;

  ${mediumLayouts} {
    bottom: 125px;
  }
`;

const CaptionRow = styled(Row)`
  padding-right: 38px;
  padding-top: 6px;
  text-align: right;
`;

const ImageWrapper = styled.figure`
  padding: 18px;
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
`;

const NutshellSection = styled.div`
  padding-right: 47px;
  margin-left: 47px;
`;

const NutshellItem = styled(Copy)`
  color: ${props => props.theme.blackAt70};
  padding-top: 4px;
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

      <TwoColLayout>
        <FeatureWrapper>
          <HeadlineWrapper>
            <Headline color="lightText">
              Hello,
              <br />
              I'm Casey Baggz
            </Headline>
          </HeadlineWrapper>

          <PhotoText color="lightText">
            Lead Frontend Dev / Technical Product Owner
          </PhotoText>

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

        <FeatureWrapper>
          <InfoSection headline="What's the Why?">
            I’m a passionate software engineer with 8.5 years of experience,
            skilled in front-end development with an extensive background in
            user experience and design.
            <br />
            <br />
            When not building products, I love speaking at conferences to help
            grow and challenge the industry, writing blogs of my latest work,
            and contributing to open-source projects.
            <br />
            <br />
            I also love to learn about house plants.
            <Emoji label="plant" symbol="🌿" size="14px" />
          </InfoSection>

          <NutshellSection>
            <SubHeadline>Me in a Nutshell</SubHeadline>
            <NutshellItem>
              <Emoji label="up" symbol="⬆️" size="14px" />
              <Emoji label="sun" symbol="☀️" size="14px" />
              <Emoji label="moon" symbol="🌕" size="14px" />
              Sagittarius, optimistic and blunt
            </NutshellItem>
            <NutshellItem>
              <Emoji label="dice" symbol="🎲" size="14px" />
              DnD campaign for over 1yr
            </NutshellItem>
            <NutshellItem>
              <Emoji label="horse" symbol="🐴" size="14px" />
              Animal lover - vegan
            </NutshellItem>
          </NutshellSection>

          <Footer />
        </FeatureWrapper>
      </TwoColLayout>
    </Layout>
  );
}

export default React.memo(Home);
