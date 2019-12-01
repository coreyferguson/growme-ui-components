import React from 'react';
import View from './UnderConstructionPageView';
import Style from './UnderConstructionPageStyle';

export default function UnderConstructionPage(props) {
  return <Style {...props}><View {...props} /></Style>;
}