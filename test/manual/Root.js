import React from 'react';
import Navigation from '../../src/components/Navigation';
import LoadingInline from '../../src/components/LoadingInline';
import Button from '../../src/components/Button'

export default function Root() {
  const props = {
    logo: <a href='#'><img src='https://assets.growme.fyi/logo_medium.jpg' />growme.fyi</a>,
    navigationLinks: [ <a href='https://flash.growme.fyi'>flash</a> ],
    contextualLinks: [ <a href='#'>sign in</a> ],
  };
  return (
    <React.Fragment>
      <Navigation {...props} />
      <section style={{ padding: '0 20px 0 20px' }}>
        <p>
          In-line with text: <LoadingInline />
        </p>
        <Button><span>press me</span> <LoadingInline /></Button>
        <Button><span>press me</span></Button>
      </section>
    </React.Fragment>
  );
}