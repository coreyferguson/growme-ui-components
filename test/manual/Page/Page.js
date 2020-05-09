import React from 'react';
import PageNavigation from './PageNavigation';
import { Route } from 'react-router-dom';
import TextAndHeroDemo from './TextAndHeroDemo';

export default function Page(props) {
  return (
    <React.Fragment>
      <Route path='/page' exact><PageNavigation /></Route>
      <Route path='/page/TextAndHero' exact><TextAndHeroDemo /></Route>
    </React.Fragment>
  );
}