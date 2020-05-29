import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Latest" />
    <a
      className="twitter-timeline"
      data-theme="light"
      href="https://twitter.com/example"
    >
      Tweets by Example
    </a>
  </Layout>
);

export default IndexPage;
