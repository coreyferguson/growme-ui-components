import React from 'react';
import Navigation from '../Navigation';
import { NavLink } from 'react-router-dom';

export default function FormNavigation() {
  return (
    <React.Fragment>
      <Navigation navigationalLinks={[
        <NavLink to='/form' exact>form</NavLink>,
        <NavLink to='/form/buttons' exact>buttons</NavLink>,
        <NavLink to='/form/inputs' exact>inputs</NavLink>
      ]} />
    </React.Fragment>
  );
}