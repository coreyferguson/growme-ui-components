import React from 'react';
import View from './NavigationView';
import Style from './NavigationStyle';

export default function Navigation(props) {
  return <Style {...props}><View {...props} /></Style>;
}