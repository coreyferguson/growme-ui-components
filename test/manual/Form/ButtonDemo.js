import React from 'react';
import Navigation from './FormNavigation';
import Button from '../../../src/components/Button';
import LoadingInline from '../../../src/components/LoadingInline';

export default function ButtonDemo(props) {
  const handleHref = e => e.preventDefault();
  return (
    <React.Fragment>
      <Navigation />

      <Button>button</Button>
      <Button><span>loading</span><LoadingInline /></Button>
      <br />

      <Button isCta={true}>CTA</Button>
      <Button isCta={true}><span>loading</span><LoadingInline /></Button>
      <br />

      <Button component={<a href='#' onClick={handleHref}>as href</a>} />
      <br />

    </React.Fragment>
  );
}