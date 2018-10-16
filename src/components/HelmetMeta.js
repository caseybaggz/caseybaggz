// @flow

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Avatar from '../images/manifest/avatar.jpg';
import AndroidFav from '../images/manifest/android-icon.png';
import AppleFav from '../images/manifest/touch-icon-retina.png';
import Favicon from '../images/manifest/favicon.png';

type Props = {
  title: string
};

export default class HelmetMeta extends Component<Props,{}> {
  static defaultProps = {
    title: 'Casey Baggz | Full Stack Dev, Colorbind Consultant, Speaker'
  }

  shouldComponentUpdate(): boolean {
    return false;
  }

  render() {
    return(
      <Helmet>
        <meta charSet="utf-8" />
        <title>{this.props.title}</title>
        <meta name="description" content="Official website for software developer and speaker Casey Baggz." />
        <meta name="keywords" content="casey baggz, casey, baggz, web developer, web,
          developer, software engineer, software, engineer, front end developer, front end,
          dev, react developer, react native, react, javascript, html, css, sass, es6,
          dallas, texas, dallas developer, oven bits, squares conference, colorblind, blind, color, consultant" />

        <meta httpEquiv="Content-Language" content="en" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta content="on" httpEquiv="cleartype" />
        <meta name="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="tomato" />

        <meta property="og:title" content="Casey Baggz" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={Avatar} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="400" />
        <meta property="og:description" content="Web and mobile app developer. Color-blind consultant." />

        <link rel="shortcut icon" href={Favicon} />
        <link rel="icon" sizes="192x192" href={AndroidFav} />
        <link rel="apple-touch-icon" href={AppleFav} />
      </Helmet>
    );
  }
}