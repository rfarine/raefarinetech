import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { Container } from 'react-responsive-grid';
import { rhythm } from 'utils/typography';
import style from './navigation.module.scss';

const Navigation = () => {
  return (
    <Container
      style={{
        maxWidth: 960,
        paddingTop: 0,
        padding: `${rhythm(1)} 0`,
      }}
    >
      <div className={style.component}>
        <Link to={prefixLink('#about')} className={style.link}>
          About
        </Link>
        <Link to={prefixLink('#portfolio')} className={style.link}>
          Portfolio
        </Link>
        <Link to={prefixLink('#contact')} className={style.link}>
          Contact
        </Link>
      </div>
    </Container>
  );
};

export default Navigation;