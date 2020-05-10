import React from 'react';
import FormNavigation from './FormNavigation';
import { Route } from 'react-router-dom';
import ButtonDemo from './ButtonDemo';
import InputDemo from './InputDemo';

export default function Form(props) {
  return (
    <React.Fragment>
      <Route path='/form' exact><FormNavigation /></Route>
      <Route path='/form/buttons' exact><ButtonDemo /></Route>
      <Route path='/form/inputs' exact><InputDemo /></Route>
    </React.Fragment>
  );
}