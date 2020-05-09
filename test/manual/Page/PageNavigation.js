import React from 'react';
import Navigation from '../Navigation';
import { NavLink } from 'react-router-dom';

export default function PageNavigation() {
  return (
    <React.Fragment>
      <Navigation navigationalLinks={[
        <NavLink to='/page' exact>page</NavLink>,
        <NavLink to='/page/TextAndHero' exact>TextAndHero</NavLink>
      ]} />
    </React.Fragment>
  );
}