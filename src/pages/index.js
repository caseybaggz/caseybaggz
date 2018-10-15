// @flow

import React, {Component} from "react";
import Copy from "../components/Copy";
import H1 from "../components/H1";
import Layout from '../components/Layout';

import './global.module.css';

const home = (
  <Layout>
    <H1>Casey Baggz</H1>
    <Copy>
      Hello! Welcome to my home. I've been everything from a designer to
      currently full-stack JS developer for the last 8 years building products
      for small business' all the way up to big names like Lays, Brinker, and
      Sabre. I'm currently the director of product and lead front-end developer
      for Pattyrn.
    </Copy>
    <Copy>
      When I'm not building amazing products that help make people's life
      easier, I enjoy speaking at events and continuing my ongoing blog focusing
      on case studies and current industry tech culture.
    </Copy>
    <Copy>
      I hope you can find what you need here and that we may have the
      opportunity to work with one another in the future.
    </Copy>
  </Layout>
);

export default class Home extends Component<{},{}> {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return home;
  }
}
