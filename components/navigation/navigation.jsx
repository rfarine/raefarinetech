import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

const Navigation = () => {
  return (
    <div>
      <Link to={prefixLink('/')}>
        Home
      </Link>
    </div>
  );
}

export default Navigation;