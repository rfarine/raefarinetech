import React, { Component } from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import Helmet from 'react-helmet';
import { config } from 'config';
import style from './index.module.scss';

export default class Index extends Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Rae Farine is a software engineer currently living in Brooklyn, NY."},
            {"name": "keywords", "content": "software, engineer, engineering, web, development, developer, portfolio, react, javascript, js, react.js"},
          ]}
        />
        <h1>
          Rae Farine
        </h1>
        <h2>
          Software Engineer
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacus ligula,
          fermentum non quam eget, aliquam ultrices ligula. Nullam ut elit ut mauris ultricies
          lobortis. Etiam justo sem, commodo eget ultricies eget, vestibulum ac lectus. Vivamus
          quis dictum neque, vitae tempus erat. Duis rutrum eget sapien et efficitur. Aliquam
          erat volutpat. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Maecenas sodales euismod enim non congue. Aenean at neque vitae mi ornare
          fringilla dignissim nec urna. Ut vel leo ut risus luctus fermentum. Aenean varius congue
          purus et facilisis. Vestibulum sollicitudin, felis mollis vulputate interdum, erat magna
          eleifend dolor, vel pharetra libero leo a ex. Maecenas semper turpis augue, nec aliquet
          erat gravida vitae. Praesent sed nisl mollis, viverra nibh ac, interdum dolor.
        </p>
      </div>
    )
  }
}
