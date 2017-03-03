import React, { Component } from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import Helmet from 'react-helmet';
import { config } from 'config';
import About from 'components/about/about';
import './index.module.scss';

const Index = () => {
  return (
    <div>
      <Helmet
        title={config.siteTitle}
        meta={[
          {"name": "description", "content": "Rae Farine is a software engineer currently living in Brooklyn, NY."},
          {"name": "keywords", "content": "software, engineer, engineering, web, development, developer, portfolio, react, javascript, js, react.js"},
        ]}
      />
      <About />
    </div>
  );
};

export default Index;
