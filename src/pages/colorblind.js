// @flow

import React, { Component } from "react";
import Copy from "../components/Copy";
import H1 from "../components/H1";
import Layout from "../components/Layout";
import BlockA from "../components/BlockA";
import HelmetMeta from "../components/HelmetMeta";

import "./global.module.css";

const cb = (
  <Layout route="/colorblind">
    <HelmetMeta title="Casey Baggz | Colorblind Consultant" />

    <H1>Build Colorblind Accessible Products</H1>
    <Copy>
      For the longest time, our culture has been un-educated on the topic of
      people with visual deficiency AKA the colorblind. Many products are built
      without consideration of people who have trouble seeing red/green
      (protanopia) or think the colorblind population is too low to put forth an
      effort to cater design around them. I would argue that there is no
      population small enough to ignore when it comes to a sell.
    </Copy>
    <Copy>
      I've recently made a blog post about the struggles of being colorblind in
      both life and the tech industry. Within the post, I break down at a
      high-level which companies have overlooked the colorblind population and
      which companies have done well to include them in the successful usability
      of their products.
    </Copy>
    <Copy>
      In the end, it doesn't matter if you are in software, hardware, furniture,
      or any other industry - we should all be building with the colorblind in
      mind. That includes our brands and colors used within our products (both
      digital and not).
    </Copy>
    <Copy>
      If you are interested in building products that will cater to the
      colorblind, let's work together and I will help break down your current
      design and give an intensive list of any shortcomings that will be hard to
      interpret for people with visual deficiency along with helpful
      recommendations on how to correct the flaws.
    </Copy>
    <Copy>
      If this sounds like you, let's talk and help build successful products for
      all people.
      <BlockA href="mailto:caseybaggz@gmail.com">
        YES! I WANT TO BUILD AMAZING PRODUCTS!
      </BlockA>
    </Copy>
  </Layout>
);

export default class ColorBlind extends Component<{}, {}> {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return cb;
  }
}
