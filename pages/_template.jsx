import React from 'react';
import { Container } from 'react-responsive-grid';
import { rhythm } from 'utils/typography';

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },

  render () {
    const { children } = this.props;

    return (
      <div>
        <Container
          style={{
            maxWidth: 960,
            padding: `${rhythm(3)} ${rhythm(2)}`,
            paddingTop: 0,
          }}
        >
          {children}
        </Container>
      </div>
    )
  },
})
