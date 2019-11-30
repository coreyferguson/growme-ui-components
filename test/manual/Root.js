import React from 'react';
import Navigation from '../../src/components/Navigation';

export default function Root() {
  const props = {
    logo: <a href='#'><img src='https://assets.growme.fyi/logo_medium.jpg' />growme.fyi</a>,
    navigationLinks: [ <a href='https://flash.growme.fyi'>flash</a> ],
    contextualLinks: [ <a href='#'>sign in</a> ],
  };
  return (
    <Navigation {...props} />
  );
}