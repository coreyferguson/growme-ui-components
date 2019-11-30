import React from 'react';
import Navigation from '../../src/components/Navigation';

export default function Root() {
  const logo = <img src='https://assets.growme.fyi/logo_medium.jpg' />;
  return <Navigation logo={logo} applicationName='growme.fyi' />;
}