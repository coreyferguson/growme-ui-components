import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './HomePage';
import RootStyle, { GlobalStyle } from '../../src/components/RootStyle';
import Page from './Page';
import Form from './Form';

export default function Root() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <RootStyle>
        <Router>
          <Route path='/' exact><HomePage /></Route>
          <Route path='/page'><Page /></Route>
          <Route path='/form'><Form /></Route>
        </Router>
      </RootStyle>
    </React.Fragment>
  );
}