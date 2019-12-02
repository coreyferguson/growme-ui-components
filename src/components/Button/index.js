import React from 'react';
import View from './ButtonView';
import Style from './ButtonStyle';

export default function Button(props) {
  return <Style {...props}><View {...props} /></Style>;
}