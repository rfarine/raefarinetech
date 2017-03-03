import React from 'react';
import { Container } from 'react-responsive-grid';
import { rhythm } from 'utils/typography';
import Navigation from 'components/navigation/navigation';

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
            maxWidth: '100%',
          }}
        >
          <Navigation />
        </Container>
        <Container
          style={{
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(1)}`,
            paddingTop: 0,
          }}
        >
          {children}
        </Container>
      </div>
    )
  },
})
