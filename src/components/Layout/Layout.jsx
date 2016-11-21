import React, { PropTypes } from 'react';
import styles from './layout.scss';

function Layout({
  children,
}) {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;