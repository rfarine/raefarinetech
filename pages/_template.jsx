import React from 'react';
import { Container } from 'react-responsive-grid';
import Headroom from 'react-headroom';
import { rhythm } from 'utils/typography';
import Navigation from 'components/navigation/navigation';
import Hero from 'components/hero/hero';

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
        <Headroom
          wrapperStyle={{
            marginBottom: rhythm(1),
            position: 'absolute',
            width: '100%',
          }}
        >
          <Container
            style={{
              maxWidth: 960,
              paddingTop: 0,
              padding: `${rhythm(1)} ${rhythm(3/4)}`,
            }}
          >
            <Navigation />
          </Container>
        </Headroom>
        <Container
          style={{
            maxWidth: '100%',
          }}
        >
          <Hero />
        </Container>
        <Container
          style={{
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(3/4)}`,
            paddingTop: 0,
          }}
        >
          {children}
        </Container>
      </div>
    )
  },
})
