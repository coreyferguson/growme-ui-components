import React from 'react';
import TextAndHeroPage from '../../../src/components/pages/TextAndHeroPage';
import Button from '../../../src/components/Button';
import Navigation from '../../../src/components/Navigation';

export default function TextAndHero(props) {
  const handleSignIn = e => {
    e.preventDefault();
    alert('sign in clicked');
  };
	const handleCta = e => {
		e.preventDefault();
    alert('CTA clicked');
	};
  return (
    <TextAndHeroPage
      navigation={
        <Navigation contextualLinks={[
          <a href='#' onClick={handleSignIn}>sign in</a>
        ]} />
      }
      main={
        <React.Fragment>
          <h1>TextAndHeroPage</h1>
          <h2>landing page galore</h2>
          <Button style={{ paddingTop: '50px' }} onClick={handleCta}>call to action</Button>
        </React.Fragment>
      }
      imageSource='https://flash-assets.growme.fyi/walnut-xlarge-40.jpg'
      imageCaption={<p>it's good for your <span className='pop'>walnut</span></p>}
    />
  );
}