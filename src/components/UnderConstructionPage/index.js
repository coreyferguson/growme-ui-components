import React from 'react';
import View from './UnderConstructionPageView';
import Style from './UnderConstructionPageStyle';

export default function Navigation(props) {
  return <Style {...props}><View {...props} /></Style>;
}