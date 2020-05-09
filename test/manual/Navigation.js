import React from 'react';
import { default as GlobalNavigation } from '../../src/components/Navigation';
import { Link, NavLink } from 'react-router-dom';

export default function Navigation(props) {
  const globalNavProps = {
    logo: <Link to='/'><img src='https://assets.growme.fyi/logo_medium.jpg' />ui gallery</Link>,
    navigationalLinks: props.navigationalLinks || [
      <NavLink to='/page'>page</NavLink>
    ]
  };
  return (
    <GlobalNavigation {...globalNavProps} />
  );
}