import React from 'react';
import Navigation from '../../src/components/Navigation';
import LoadingInline from '../../src/components/LoadingInline';
import Button from '../../src/components/Button'
import LoadingPage from '../../src/components/LoadingPage';

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
      <Button style={{ minWidth: '300px' }} onClick={() => console.log('hi')}>beep boop</Button>
      <Button style={{ minWidth: '300px' }} isCta={true} onClick={() => console.log('hi')}>CTA</Button>
      <Button icon='delete' onClick={() => console.log('hi')}>beep boop</Button>
    </React.Fragment>
  );
}