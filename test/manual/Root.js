import React from 'react';
import Navigation from '../../src/components/Navigation';
import LoadingInline from '../../src/components/LoadingInline';
import Button from '../../src/components/Button'

export default function Root() {
  const props = {
    logo: <a href='#'><img src='https://assets.growme.fyi/logo_medium.jpg' />growme.fyi</a>,
    navigationalLinks: [
      <a href='https://flash.growme.fyi'>flash</a>,
      <a href='https://flash.growme.fyi' className='active'>active</a>
    ],
    contextualLinks: [ <a href='#'>sign in</a> ],
  };
  return (
    <React.Fragment>
      <Navigation {...props} />
      <div>
        <Button>button</Button>
        <Button><span>loading</span><LoadingInline /></Button>
        <br />

        <Button isCta={true}>CTA</Button>
        <Button isCta={true}><span>loading</span><LoadingInline /></Button>
        <br />

        <Button component={<a href='https://flash.growme.fyi'>as href</a>} />
        <br />
      </div>
    </React.Fragment>
  );
}